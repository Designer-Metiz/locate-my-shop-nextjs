/// <reference path="./deno.d.ts" />

// @ts-ignore - Deno URL imports are supported in Supabase Edge Functions runtime
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// SMTP Configuration from environment variables
const SMTP_HOST = Deno.env.get("SMTP_HOST") || "";
const SMTP_PORT = parseInt(Deno.env.get("SMTP_PORT") || "587");
const SMTP_USER = Deno.env.get("SMTP_USER") || "";
const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD") || "";
const SMTP_FROM_EMAIL = Deno.env.get("SMTP_FROM_EMAIL") || "noreply@metizsoft.com";
const SMTP_FROM_NAME = Deno.env.get("SMTP_FROM_NAME") || "MSPL Store Locator";
const SMTP_TO_EMAIL = Deno.env.get("SMTP_TO_EMAIL") || "hello@metizsoft.com";
const SMTP_SECURE = Deno.env.get("SMTP_SECURE") === "true"; // Use TLS/SSL

console.log("SMTP Configuration:", {
  host: SMTP_HOST,
  port: SMTP_PORT,
  user: SMTP_USER ? "***configured***" : "missing",
  from: SMTP_FROM_EMAIL,
  to: SMTP_TO_EMAIL,
  secure: SMTP_SECURE
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// SMTP Email sending function
async function sendEmailViaSMTP(
  to: string,
  subject: string,
  htmlContent: string
): Promise<void> {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error("SMTP configuration is incomplete. Please check environment variables.");
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  
  // Connect to SMTP server
  // Port 465 uses SSL/TLS directly, port 587 uses STARTTLS
  // Use Deno's native connection APIs with type casting
  let conn: any;
  
  if (SMTP_PORT === 465 || SMTP_SECURE) {
    // Direct TLS connection for port 465
    // @ts-ignore - Deno.connectTls may not be in type definitions but exists at runtime
    conn = await (Deno as any).connectTls({
      hostname: SMTP_HOST,
      port: SMTP_PORT,
    });
  } else {
    // Plain connection for STARTTLS (port 587)
    // @ts-ignore - Deno.connect may not be in type definitions but exists at runtime
    conn = await (Deno as any).connect({
      hostname: SMTP_HOST,
      port: SMTP_PORT,
    });
  }

  try {
    // Helper function to read SMTP response
    const readResponse = async (): Promise<string> => {
      const buffer = new Uint8Array(4096);
      const n = await conn.read(buffer);
      if (n === null) throw new Error("Connection closed");
      return decoder.decode(buffer.subarray(0, n));
    };

    // Helper function to send command and wait for response
    const sendCommand = async (command: string): Promise<string> => {
      await conn.write(encoder.encode(command + "\r\n"));
      return await readResponse();
    };

    // Read initial greeting
    const greeting = await readResponse();
    if (!greeting.startsWith("220")) {
      throw new Error(`SMTP server error: ${greeting}`);
    }

    // Send EHLO
    const ehloResponse = await sendCommand(`EHLO ${SMTP_HOST}`);
    if (!ehloResponse.startsWith("250")) {
      throw new Error(`EHLO failed: ${ehloResponse}`);
    }

    // Start TLS if needed (port 587 typically uses STARTTLS)
    if (SMTP_PORT === 587 && !SMTP_SECURE) {
      const tlsResponse = await sendCommand("STARTTLS");
      if (tlsResponse.startsWith("220")) {
        // Upgrade connection to TLS
        // Since Deno.startTls is not available in Supabase Edge Functions,
        // close and reconnect with direct TLS connection
        conn.close();
        // @ts-ignore - Deno.connectTls may not be in type definitions but exists at runtime
        conn = await (Deno as any).connectTls({
          hostname: SMTP_HOST,
          port: SMTP_PORT,
        });
        // Re-read greeting and send EHLO
        await readResponse();
        await sendCommand(`EHLO ${SMTP_HOST}`);
      }
    }

    // Authenticate using AUTH LOGIN
    const authLoginResponse = await sendCommand("AUTH LOGIN");
    if (!authLoginResponse.startsWith("334")) {
      throw new Error(`AUTH LOGIN failed: ${authLoginResponse}`);
    }

    // Send username (base64 encoded)
    const userResponse = await sendCommand(btoa(SMTP_USER));
    if (!userResponse.startsWith("334")) {
      throw new Error(`Username authentication failed: ${userResponse}`);
    }

    // Send password (base64 encoded)
    const passwordResponse = await sendCommand(btoa(SMTP_PASSWORD));
    if (!passwordResponse.startsWith("235")) {
      throw new Error(`SMTP authentication failed: ${passwordResponse}`);
    }

    // Set sender
    const mailFromResponse = await sendCommand(`MAIL FROM:<${SMTP_FROM_EMAIL}>`);
    if (!mailFromResponse.startsWith("250")) {
      throw new Error(`MAIL FROM failed: ${mailFromResponse}`);
    }

    // Set recipient
    const rcptToResponse = await sendCommand(`RCPT TO:<${to}>`);
    if (!rcptToResponse.startsWith("250")) {
      throw new Error(`RCPT TO failed: ${rcptToResponse}`);
    }

    // Send data
    const dataResponse = await sendCommand("DATA");
    if (!dataResponse.startsWith("354")) {
      throw new Error(`DATA command failed: ${dataResponse}`);
    }

    // Email headers and body
    const emailData = [
      `From: ${SMTP_FROM_NAME} <${SMTP_FROM_EMAIL}>`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=UTF-8`,
      ``,
      htmlContent,
      `.`
    ].join("\r\n");

    const sendResponse = await sendCommand(emailData);
    if (!sendResponse.startsWith("250")) {
      throw new Error(`Email sending failed: ${sendResponse}`);
    }

    // Quit
    await sendCommand("QUIT");
  } finally {
    conn.close();
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form data:", formData);

    const { firstName, lastName, email, phone, message } = formData;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Prepare email content
    const subject = `Store Locator: New Contact Form Submission from ${firstName} ${lastName}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Store Locator
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
          <h3 style="color: #007bff; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            This message was sent from the MSPL Store Locator contact form.
          </p>
        </div>
      </div>
    `;

    // Send email using SMTP
    await sendEmailViaSMTP(SMTP_TO_EMAIL, subject, htmlContent);

    console.log("Email sent successfully via SMTP");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully via SMTP"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);


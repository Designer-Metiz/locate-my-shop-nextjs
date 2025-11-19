import { NextResponse } from "next/server";

// Debug endpoint to check environment variables (remove in production)
export async function GET() {
  return NextResponse.json({
    SMTP_HOSTNAME: process.env.SMTP_HOSTNAME ? "***configured***" : "(missing)",
    SMTP_PORT: process.env.SMTP_PORT || "(missing)",
    SMTP_USERNAME: process.env.SMTP_USERNAME ? "***configured***" : "(missing)",
    SMTP_PASSWORD: process.env.SMTP_PASSWORD ? "***configured***" : "(missing)",
    SMTP_FROM: process.env.SMTP_FROM || "(using SMTP_USERNAME as fallback)",
    SMTP_TO: process.env.SMTP_TO || "(using default: hello@metizsoft.com)",
    allEnvKeys: Object.keys(process.env).filter(key => key.startsWith("SMTP_")),
  }, {
    headers: {
      "Cache-Control": "no-store",
    }
  });
}


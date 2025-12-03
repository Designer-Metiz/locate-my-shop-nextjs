import "./globals.css";
// Quill CSS is loaded conditionally in admin pages and needed for blog prose styles
// Import it here but it will be tree-shaken if not used
import "@/styles/quill.css";
import type { Metadata } from "next";
import Script from "next/script";
import { ReactQueryClientProvider } from "@/components/providers/ReactQueryClientProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: {
    default: "Best Shopify Store Locator App - Find Stores Easily | Metizsoft",
    template: "%s | Metizsoft",
  },
  description:
    "Metizsoft's Shopify app helps customers find stores quickly with custom maps, bulk uploads, and mobile-friendly design. Ideal for businesses needing efficient store location solutions.",
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : new URL("http://localhost:3000"),
  icons: {
    icon: "/lovable-uploads/e38b2a7e-a356-4be7-a266-c52662189454.png",
    apple: "/lovable-uploads/e38b2a7e-a356-4be7-a266-c52662189454.png",
    shortcut: "/lovable-uploads/e38b2a7e-a356-4be7-a266-c52662189454.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVME1QQG6G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NVME1QQG6G');
          `}
        </Script>
        
        <ReactQueryClientProvider>
          <ThemeProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <main>{children}</main>
            </TooltipProvider>
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}


// Critical CSS - loaded first for FCP optimization
import "./globals.css";
// Quill CSS - only loaded when rich text editor is used (admin/blog pages)
// This will be tree-shaken if not used, but we import it here for blog prose styles
// Consider moving to blog layout if not needed on all pages
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
        {/* Preconnect to critical external origins for faster resource loading */}
        {/* Fonts - critical for FCP, use preconnect with crossorigin */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preconnect to same origin for faster CSS/JS loading - only in production */}
        {process.env.NODE_ENV === 'production' && (
          <link 
            rel="preconnect" 
            href={process.env.NEXT_PUBLIC_SITE_URL || "https://www.storelocator.in"} 
          />
        )}
        
        {/* Analytics - non-critical, use dns-prefetch only */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* YouTube - for iframe, use dns-prefetch */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        
        {/* Mobile optimization - prevent layout shift */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body>
        {/* Google Analytics - Load only after user interaction or idle time to reduce unused JS */}
        <Script
          id="google-analytics-loader"
          strategy="afterInteractive"
        >
          {`
            // Load Google Analytics only after user interaction or 3 seconds of idle time
            let loaded = false;
            const loadGA = () => {
              if (loaded) return;
              loaded = true;
              
              // Load gtag script
              const script = document.createElement('script');
              script.async = true;
              script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NVME1QQG6G';
              document.head.appendChild(script);
              
              // Initialize gtag
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NVME1QQG6G', {
                page_path: window.location.pathname,
              });
            };
            
            // Load on user interaction (click, scroll, touchstart, keydown)
            const events = ['click', 'scroll', 'touchstart', 'keydown'];
            events.forEach(event => {
              document.addEventListener(event, loadGA, { once: true, passive: true });
            });
            
            // Also load after 3 seconds if no interaction
            setTimeout(loadGA, 3000);
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


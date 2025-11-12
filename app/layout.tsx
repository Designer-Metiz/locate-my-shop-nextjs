import "./globals.css";
import type { Metadata } from "next";
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
      <body>
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


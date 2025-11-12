import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us I MSPL Shopify Store Locator App",
  description:
    "Have questions? Contact us to explore how Shopify Store Locator can boost your business. Let’s connect and build success together.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



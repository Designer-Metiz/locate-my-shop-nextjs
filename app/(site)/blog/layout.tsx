import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store Locator Blogs I MSPL Shopify Store Locator App",
  description:
    "Stay updated with practical tips and insights on boosting customer reach, improving store visibility, and growing your business locally.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}



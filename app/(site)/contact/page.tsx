import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us - Best Store Locator App",
  description: "Have questions? Contact us to explore how our Store Locator can boost your business. Let’s connect and build success together.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}


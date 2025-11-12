import React from "react";
import HeroSection from "@/components/HeroSection";
import CustomizeSection from "@/components/CustomizeSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import ScrollToHash from "@/components/ScrollToHash";

export const metadata = {
  title: "Best Shopify Store Locator App - Find Stores Easily | Metizsoft",
  description:
    "Metizsoft's Shopify app helps customers find stores quickly with custom maps, bulk uploads, and mobile-friendly design. Ideal for businesses needing efficient store location solutions.",
};

export default function Page() {
  const siteUrlFromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
  const baseUrl = siteUrlFromEnv || vercelUrl || 'http://localhost:3000';

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Shopify Store Locator App - Find Stores Easily | Metizsoft",
    "description": "Shopify store locator app with custom maps, bulk upload, and mobile design. Help customers find your stores fast with our store finder.",
    "url": baseUrl
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the app easy to install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the app is user-friendly and integrates seamlessly with Shopify. Installation takes just a few clicks from the Shopify App Store, and our setup wizard guides you through the entire process."
        }
      },
      {
        "@type": "Question",
        "name": "How do I add multiple stores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can bulk upload store locations using a CSV file for quick setup, or add them individually through our intuitive interface."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The app offers a free plan for up to 3 locations with no time limit. All paid plans also come with a 14-day free trial."
        }
      },
      {
        "@type": "Question",
        "name": "Is the store locator mobile - friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the app is fully responsive and works perfectly across all devices — desktops, tablets, and smartphones. Customers can locate stores, get directions, and contact outlets directly from their phones."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need technical knowledge to set it up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No technical expertise is required. The app is built for everyone — just install it, upload your store data, and embed it on your preferred page. Setup takes only a few minutes."
        }
      },
      {
        "@type": "Question",
        "name": "can i customize the map design to my store theme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can easily change map colors, pin icons, and layouts to align with your brand's Shopify theme. Every part of the locator can be personalized to match your design style."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add a store locator for my website without coding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can add a store locator for your website without writing any code. The Shopify Store Locator App provides a plug-and-play setup, allowing you to display your locations within minutes."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between a store locator map and store locator software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A store locator map focuses on showing your stores visually to customers, while store locator software includes management tools like analytics, bulk uploads, and customization."
        }
      },
      {
        "@type": "Question",
        "name": "How does a store locator widget help improve user experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adding a store locator widget helps customers find your outlets without leaving your website. It creates a quick, direct path from online search to in-store visit — saving time and reducing friction."
        }
      },
      {
        "@type": "Question",
        "name": "Does having a store locator map improve local SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Embedding a store locator map helps search engines recognize your physical locations. It increases the chances of appearing in \"near me\" searches and local results, driving more organic foot traffic."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        {/* @ts-ignore - JSON-LD schema script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        {/* @ts-ignore - JSON-LD schema script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="my-[15px]">
          <HeroSection />
        </div>
        <div className="my-[15px]">
          <CustomizeSection />
        </div>
        <section id="features" className="my-[15px] scroll-mt-28">
          <FeaturesSection />
        </section>
        <section id="how-it-works" className="my-[15px] scroll-mt-28">
          <HowItWorksSection />
        </section>
        <section id="pricing" className="my-[15px] scroll-mt-28">
          <PricingSection />
        </section>
        <section id="testimonials" className="my-[15px] scroll-mt-28">
          <TestimonialsSection />
        </section>
        <section id="faq" className="my-[15px] scroll-mt-28">
          <FAQSection />
        </section>
        <section id="blog" className="my-[15px] scroll-mt-28">
          <BlogSection />
        </section>
        <div className="my-[15px]">
          <CTASection />
        </div>
      </main>
      <ScrollToHash />
    </div>
  );
}



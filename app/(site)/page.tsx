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

  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,  // Use baseUrl instead of hardcoded
        "url": baseUrl, 
        "name": "StoreLocator.in",
        "description": "StoreLocator.in helps businesses create powerful, accurate, and customizable store locator solutions with bulk upload, geo-location, filters, analytics, and easy website integration.",
        "publisher": {
          "@id": "https://www.storelocator.in/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.storelocator.in/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.storelocator.in/#organization",
        "name": "StoreLocator.in",
        "url": "https://www.storelocator.in/",
        "logo": "https://www.storelocator.in/wp-content/uploads/2024/05/storelocator-logo.png",
        "sameAs": [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.storelocator.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is StoreLocator.in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "StoreLocator.in is a complete store locator solution that allows businesses to display their store locations on an interactive map with features like bulk upload, location analytics, filters, search, geo-location, and easy website integration."
            }
          },
          {
            "@type": "Question",
            "name": "Who can use StoreLocator.in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "StoreLocator.in can be used by any multi-location business such as retail brands, pharmacies, supermarkets, service centers, automobile dealers, clinics, and franchise chains that need to help customers find nearby store locations."
            }
          },
          {
            "@type": "Question",
            "name": "Does StoreLocator.in support bulk location uploads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, StoreLocator.in allows bulk upload of store locations using CSV files, making it easy to manage large numbers of stores efficiently."
            }
          },
          {
            "@type": "Question",
            "name": "Can the store locator be customized?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, StoreLocator.in offers customizable map styles, brand-based color themes, filters, and layout options to match your website's branding."
            }
          },
          {
            "@type": "Question",
            "name": "Does it support mobile-friendly store locators?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. StoreLocator.in is fully responsive and optimized for mobile devices, ensuring customers can easily find stores on any screen size."
            }
          },
          {
            "@type": "Question",
            "name": "What analytics does StoreLocator.in provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The platform provides insights such as store views, search queries, popular locations, device usage, and user interaction patterns to help businesses optimize store visibility."
            }
          }
        ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
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



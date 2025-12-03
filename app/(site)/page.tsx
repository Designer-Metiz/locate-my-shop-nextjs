import dynamic from "next/dynamic";
import Script from "next/script";
import HeroSection from "@/components/HeroSection";
import CustomizeSection from "@/components/CustomizeSection";

// Dynamically import below-the-fold components to reduce initial bundle size
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const HowItWorksSection = dynamic(() => import("@/components/HowItWorksSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const PricingSection = dynamic(() => import("@/components/PricingSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const BlogSection = dynamic(() => import("@/components/BlogSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const CTASection = dynamic(() => import("@/components/CTASection"), {
  loading: () => <div className="min-h-[200px]" />,
});
const ScrollToHash = dynamic(() => import("@/components/ScrollToHash"), {
  ssr: false,
});

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
        "@id": "https://www.storelocator.in/website",
        "url": "https://www.storelocator.in/",
        "name": "StoreLocator.in",
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
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.storelocator.in/path-to-your-logo.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.storelocator.in/#webpage",
        "url": "https://www.storelocator.in/",
        "name": "Store Locator App for Shopify | StoreLocator.in",
        "description": "Add a fully customizable store locator to your Shopify store. Display multiple locations, track searches, and help customers find the nearest outlet fast.",
        "inLanguage": "en",
        "isPartOf": {
          "@id": "https://www.storelocator.in/#website"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.storelocator.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the app easy to install?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the app is user-friendly and integrates smoothly with Shopify. Installation takes just a few clicks from the Shopify App Store, and the setup wizard guides you through the full process."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a free trial available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the app offers a free plan for up to 3 locations with no time limit. All paid plans also include a 14-day free trial."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need technical knowledge to set it up?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No technical background is needed. The app is designed for all users — install it, upload store data, and embed it on any page. Setup takes only a few minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Can I add a store locator to my website without coding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can add a store locator without writing code. The Shopify Store Locator App offers a plug-and-play setup that displays your store locations within minutes."
            }
          },
          {
            "@type": "Question",
            "name": "How does a store locator widget help improve user experience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A store locator widget helps customers find nearby outlets without leaving your website. It creates a direct path from online browsing to in-store visits, saving time and reducing friction."
            }
          },
          {
            "@type": "Question",
            "name": "How do I add multiple stores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can bulk upload store locations using a CSV file or add them one by one through the app's user-friendly dashboard."
            }
          },
          {
            "@type": "Question",
            "name": "Is the store locator mobile-friendly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the app is fully responsive and works smoothly on all devices, including smartphones, tablets, and desktops. Customers can get directions and contact stores directly from their phones."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize the map design to match my store theme?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can customize map colors, pin icons, and layouts to match your Shopify theme. The entire locator can be styled to suit your brand."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between a store locator map and store locator software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A store locator map displays store locations visually, while store locator software includes advanced features like analytics, bulk uploads, customization, and management tools."
            }
          },
          {
            "@type": "Question",
            "name": "Does having a store locator map improve local SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Adding a store locator map helps search engines recognize your physical locations, improving visibility for 'near me' and local searches, which can increase organic foot traffic."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema - Loaded with Script component for better performance */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <main>
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



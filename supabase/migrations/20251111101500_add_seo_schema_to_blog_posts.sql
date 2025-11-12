-- Add seo_schema column to blog_posts to store JSON-LD structured data
alter table if exists public.blog_posts
  add column if not exists seo_schema jsonb;

-- Optional seed: attach example schema to a known slug if it exists
update public.blog_posts
set seo_schema = $json$
[
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the main purpose of a store locator app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To help customers quickly find nearby outlets with accurate directions and details, improving convenience and driving more store visits."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Shopify store locator plugin help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It allows businesses to display all store locations on one map, making it easy for shoppers to find the closest branch."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes the best store locator software effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Features such as GPS detection, filters, mobile optimization, and real-time updates make it valuable for both customers and businesses."
        }
      },
      {
        "@type": "Question",
        "name": "Can store locators work for businesses with multiple outlets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. They are designed to display multiple stores in a single, centralized view, thereby improving user experience and efficiency."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://storelocator.in/blog/why-your-business-needs-optimized-store-locator-app"
    },
    "headline": "Why Your Business Needs an Optimized Store Locator App",
    "image": "https://sdynhxzxiqpernlzakuv.supabase.co/storage/v1/object/public/blog-media/blog-images/jutyfwyr3ca.jpg",
    "author": {
      "@type": "Person",
      "name": "Manthan Bhavsar",
      "url": "https://www.linkedin.com/in/manthanbhavsar/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "StoreLocator Website",
      "logo": {
        "@type": "ImageObject",
        "url": "https://storelocator.in/lovable-uploads/e38b2a7e-a356-4be7-a266-c52662189454.png"
      }
    },
    "datePublished": "2025-09-12",
    "dateModified": "2025-09-12"
  }
]
$json$::jsonb
where slug = 'why-your-business-needs-optimized-store-locator-app';



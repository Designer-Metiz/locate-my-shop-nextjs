import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store Locator Examples I MSPL Shopify Store Locator App ",
  description:
    "View examples of our store locator, which is simple yet powerful. Set up in minutes, works on all platforms, and requires no coding knowledge.",
  alternates: {
    canonical: "/store-locator-examples",
  },
  openGraph: {
    title: "Store Locator Examples I MSPL Shopify Store Locator App ",
    description:
      "View examples of our store locator, which is simple yet powerful. Set up in minutes, works on all platforms, and requires no coding knowledge.",
    type: "website",
    url: "/store-locator-examples",
  },
  twitter: {
    card: "summary_large_image",
    title: "Store Locator Examples I MSPL Shopify Store Locator App ",
    description:
      "View examples of our store locator, which is simple yet powerful. Set up in minutes, works on all platforms, and requires no coding knowledge.",
  },
};

const mapStyles = [
  {
    name: "Standard",
    description:
      "The classic Google Maps look that most users are familiar with. Clear roads, green landscapes, and simple pin visibility. Best for businesses that value simplicity and familiarity—ideal for retail chains, grocery stores, or service centers.",
    previewImage: "/lovable-uploads/standard-map-style.png", // Standard Map Style - Shopify admin preview
    demoImage: "/lovable-uploads/standard-map-look.png", // Standard Map Look - Actual store locator page
  },
  {
    name: "Silver",
    description:
      "A minimalist, muted, and modern look. Uses light grays and subtle tones instead of bold colors. Perfect for premium, luxury, or corporate brands that want the map to feel clean, calm, and professional.",
    previewImage: "/lovable-uploads/silver-map-style.png",
    demoImage: "/lovable-uploads/silver-map-look.png",
  },
  {
    name: "Retro",
    description:
      "A warm, vintage-inspired design with beige and earthy tones. Evokes nostalgia and friendliness while still being clear. Great for artisanal, boutique, or heritage-focused businesses such as bakeries, breweries, or handcrafted goods.",
    previewImage: "/lovable-uploads/retro-map-style.png",
    demoImage: "/lovable-uploads/retro-map-look.png",
  },
  {
    name: "Dark",
    description:
      "A bold, black-themed map style with strong contrast. Feels sleek, stylish, and modern, making store pins pop visually. Ideal for high-end brands like tech companies, fashion outlets, or premium restaurants that want a more dramatic look.",
    previewImage: "/lovable-uploads/dark-map-style.png",
    demoImage: "/lovable-uploads/dark-map-look.png",
  },
  {
    name: "Night",
    description:
      "Designed with dark blue and muted tones, resembling nighttime navigation. Easy on the eyes, especially for users browsing in low light. Works well for nightlife brands, bars, entertainment venues, or late-night service providers.",
    previewImage: "/lovable-uploads/night-map-style.png",
    demoImage: "/lovable-uploads/night-map-look.png",
  },
  {
    name: "Aubergine",
    description:
      "A creative purple-toned map style with unique contrast levels. Adds personality and fun to the map without being overwhelming. Best suited for lifestyle, beauty, or youth-oriented brands that want to stand out with vibrancy and uniqueness.",
    previewImage: "/lovable-uploads/aubergine-map-style.png",
    demoImage: "/lovable-uploads/aubergine-map-look.png",
  },
];

const layoutStyles = [
  {
    name: "Map on Left",
    description:
      "The map sits on the left side, and the store list appears on the right. A balanced, classic design that works across industries. Best for businesses that want a straightforward, easy-to-use layout.",
    isDefault: true,
  },
  {
    name: "Map on Right",
    description:
      "Reverses the default: map on the right, store list on the left. Sometimes aligns better with websites where the design flow leads from left to right. Useful when you want the list to be the first thing users see before exploring the map.",
  },
  {
    name: "Map on Left Top",
    description:
      "The map is placed above the store list (stacked design). Works well for mobile-friendly sites or landing pages where vertical scrolling feels natural. Great for audiences who expect quick browsing on smartphones.",
  },
  {
    name: "Map on Right Top",
    description:
      "Same stacked layout but with the map on the right side. Adds variation to standard layouts while still being mobile-optimized. Works best when your site's design favors right-hand visuals.",
  },
];

const storeExamples = [
  {
    name: "Englander Store Locator",
    url: "https://www.englander.com/a/storelocator",
    description:
      "Englander is one of the world's most respected mattress brands, known for comfort, reliability, and innovation in sleep solutions. Their store locator reflects the same philosophy — keeping the experience simple, welcoming, and stress-free for customers who are often making an important, long-term purchase decision.",
    features: [
      "Design & Branding - Clean, breathable design that mirrors the peace of mind customers expect",
      "Search Functionality - Intuitive search with geolocation for automatic detection",
      "Mobile Friendly Experience - Fully responsive with large buttons for easy tapping",
      "Detailed Store Profiles - Phone numbers, operating hours, directions, and 'Authorized Dealer' badges",
    ],
    demoImage: "/lovable-uploads/englander-example.jpg",
  },
  {
    name: "Vita-Sol Store Locator",
    url: "https://www.vita-sol.com/a/storelocator",
    description:
      "Vita-Sol is a wellness and nutrition brand that focuses on creating health from within through scientifically formulated supplements. Their store locator extends this philosophy by offering a calm, clear, and reliable way for customers to connect with stockists.",
    features: [
      "Design & Branding - Soft, calming colors with minimalist interface reflecting wellness identity",
      "Search Functionality - Instant results with geolocation for health-conscious consumers",
      "Mobile Optimization - Smooth adaptation for smaller screens with easy-to-tap buttons",
      "Filtering Options - Search by product availability to prevent customer frustration",
    ],
    demoImage: "/lovable-uploads/vita-sol-example.jpg",
  },
  {
    name: "QD Stores Store Locator",
    url: "https://www.qdstores.co.uk/a/storelocator",
    description:
      "QD Stores is a popular UK-based retailer known for affordable home, garden, and everyday products. With such a broad customer base, their store locator is designed for practicality and speed.",
    features: [
      "Design & Branding - Simple and functional, matching the brand's value-first identity",
      "Search Functionality - Real-time results with geolocation for multiple nearby branches",
      "Mobile Optimization - Tap-friendly interface for users on the move",
      "Comprehensive Store Details - Full contact info plus services like 'Click & Collect'",
    ],
    demoImage: "/lovable-uploads/qd-stores-example.jpg",
  },
  {
    name: "Cherry Lane Store Locator",
    url: "https://www.cherry-lane.co.uk/a/storelocator",
    description:
      "Cherry Lane is one of the UK's leading garden center groups, offering plants, tools, and home & garden products. Their store locator mirrors this outdoor inspiration with a fresh, nature-driven design that feels both inviting and practical.",
    features: [
      "Design & Branding - Natural tones like greens and earth-inspired colors to tie in with gardening theme",
      "Search Functionality - Quick results by city, postcode, or county with geolocation support",
      "Mobile-Friendly Navigation - Seamless adaptation with touch-friendly buttons for calls and directions",
      "Store Profiles - Full information including special features like cafés, nursery sections, or seasonal offers",
    ],
    demoImage: "/lovable-uploads/cherry-lane-example.jpg",
  },
  {
    name: "Theobroma Store Locator",
    url: "https://theobroma.in/a/storelocator",
    description:
      "Theobroma, India's beloved bakery and patisserie chain, is famous for its brownies, cakes, and indulgent treats. Their store locator reflects this indulgent yet approachable brand identity, making it simple for dessert lovers to find the nearest outlet whenever cravings strike.",
    features: [
      "Design & Branding - Warm, inviting tones reflecting cozy bakery indulgence with handcrafted typography",
      "Search Functionality - City, state, or ZIP code search with auto-detection for mobile users",
      "Mobile Adaptability - Fully optimized with large buttons for calling or navigating to outlets",
      "Store Profiles - Rich details including custom cake availability and dine-in café services",
    ],
    demoImage: "/lovable-uploads/theobroma-example.jpg",
  },
  {
    name: "Comvita Store Locator",
    url: "https://www.comvita.com/a/storelocator",
    description:
      "Comvita, globally recognized for its Manuka honey and natural health products, takes a thoughtful approach with its store locator. In a competitive wellness market, their locator ensures authenticity and creates an inclusive customer experience.",
    features: [
      "Design & Branding - Clean, modern interface with earthy tones reflecting natural roots and quality",
      "Localized Experience - Multilingual support (English and Chinese) for diverse Hong Kong market",
      "Geo-Friendly Search - Manual searches and automatic location detection for dense urban navigation",
      "Store Profiles - Detailed information including product types, opening hours, and authorized dealer verification",
    ],
    demoImage: "/lovable-uploads/comvita-example.jpg",
  },
  {
    name: "Big Tree Distillery Store Locator",
    url: "https://bigtreedistillery.com.au/a/storelocator",
    description:
      "Big Tree Distillery is a boutique Australian gin maker that prides itself on craftsmanship and authenticity. Their store locator embodies the same artisanal sophistication, creating not just a tool for navigation but an extension of the brand's storytelling.",
    features: [
      "Design & Branding - Deep, bold tones and elegant fonts reflecting luxury gin identity",
      "Navigation Options - City, region search with geolocation and map clustering for clarity",
      "Mobile Experience - Seamless adaptation with large tap-friendly buttons for directions and calls",
      "Store Profiles - Rich details including cellar door, bar, or retail stockist with tasting information",
    ],
    demoImage: "/lovable-uploads/big-tree-example.jpg",
  },
  {
    name: "Nuvita Baby Store Locator",
    url: "https://nuvitababy.com/a/storelocator",
    description:
      "Nuvita Baby is a trusted name in innovative baby care products, from feeding solutions to monitoring devices. Their store locator is designed with parents in mind, focusing on simplicity, reassurance, and efficiency for time-pressed parents.",
    features: [
      "Design & Branding - Soft, inviting design with pastel tones and rounded buttons echoing safety and care",
      "Search Functionality - City or postal code search with instant geolocation for busy parents",
      "Mobile Optimization - Highly responsive with touch-friendly buttons and intuitive scrolling",
      "Store Profiles - Opening hours, contact info, plus parent-friendly amenities like stroller access",
    ],
    demoImage: "/lovable-uploads/nuvita-baby-example.jpg",
  },
  {
    name: "Handpan World Store Locator",
    url: "https://www.handpan.world/en-in/a/storelocator",
    description:
      "Handpan World caters to a niche but passionate community of musicians and enthusiasts. Their store locator is more than a retail tool — it doubles as a cultural gateway that connects people with sellers, workshops, and events across the globe.",
    features: [
      "Artistic Design - Unique elements like circular pins resembling handpans for creative, musical touch",
      "Global Reach - International scale connecting users from different continents with local sellers and instructors",
      "Mobile Accessibility - Responsive design for traveling enthusiasts with one-tap directions",
      "Store Profiles - Listings include shops, community spaces, and event venues with workshop and rental information",
    ],
    demoImage: "/lovable-uploads/handpan-world-example.jpg",
  },
  {
    name: "Philips Domestic Appliances India Store Locator",
    url: "https://www.domesticappliances.philips.co.in/a/storelocator",
    description:
      "Philips has built strong trust in the Indian market through reliable products and customer support. Their store locator serves not only as a tool to find retail outlets but also as a gateway to service centers—bridging purchase and after-sales care.",
    features: [
      "Design & Branding - Signature Philips branding: modern, minimal, and professional with dependable feel",
      "Dual Functionality - Integrates both retail stores and authorized service centers for complete lifecycle support",
      "Mobile Optimization - Mobile-first design with large, thumb-friendly buttons for calls and directions",
      "Comprehensive Profiles - Full details including services offered, spare parts availability, and business hours",
    ],
    demoImage: "/lovable-uploads/philips-example.jpg",
  },
];

export default function StoreLocatorExamples() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30" style={{ marginBottom: "10px" }}>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-primary-soft bg-clip-text text-transparent">
                Store Locator Examples
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-2">
                View examples of our store locator, which is simple yet powerful. Set up in minutes, works on all platforms, and requires no coding knowledge.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto" asChild>
                <a href="https://apps.shopify.com/store-locator-by-metizsoft" target="_blank" rel="noopener noreferrer">
                  Create Your Store Locator Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 lg:py-16" style={{ marginBottom: "10px" }}>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Personalize Your Store Locator</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto px-2 mb-6">
                Our store locator is more than a simple map—it's an extension of your website's branding and customer journey. 
                To make it both functional and visually aligned with your business, you can customize two main aspects:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8 px-4">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">Map Styles</span> – How the map itself looks (colors, tones, themes)
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">Map Layout Styles</span> – How the map and store list are arranged
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 lg:py-16 bg-muted/30" style={{ marginBottom: "10px" }}>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">1. Map Styles</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto px-2">
                The map style determines how your store locator visually appears to customers. Instead of sticking to a single standard look, 
                you can choose from multiple pre-designed styles depending on your brand identity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {mapStyles.map((style) => (
                <Card key={style.name} className="overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                      <h3 className="text-lg md:text-xl font-semibold">
                        {style.name} {style.name === "Standard" && "(Default)"}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{style.description}</p>

                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm md:text-base">{style.name} Map Style</h4>
                        <img
                          src={style.previewImage}
                          alt={`${style.name} Map Style - MSPL Store Locator`}
                          className="w-full rounded-lg border aspect-video object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm md:text-base">{style.name} Map Look</h4>
                        <img
                          src={style.demoImage}
                          alt={`${style.name} Map Look - MSPL Store Locator`}
                          className="w-full rounded-lg border aspect-video object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Why Map Styles Matter</h3>
              <p className="text-muted-foreground">
                Each style changes how users emotionally connect with your locator. A grocery chain might use Standard or Silver for clarity, 
                while a nightlife brand might choose Dark or Night for mood. By aligning the map's style with your brand, you create a seamless digital experience.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 lg:py-16" style={{ marginBottom: "10px" }}>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">2. Map Layout Styles</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto px-2">
                The layout style decides how your map and store list are arranged on the page. This matters for usability, readability, and user flow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {layoutStyles.map((layout) => (
                <Card key={layout.name}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">
                        {layout.name} {layout.isDefault && "(Default)"}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{layout.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Why Layout Styles Matter</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• A side-by-side layout (Map Left or Right) gives users a broader view of both the map and the list at once.</p>
                <p>• A stacked layout (Map Left Top or Right Top) is better for mobile-first audiences, as it flows naturally with scrolling.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30" style={{ marginBottom: "10px" }}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Store Locator Examples</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                Looking for inspiration on how different brands use store locators? Here are some real examples from businesses across industries. 
                Each of these companies has created a simple, user-friendly store locator to help customers find products and services near them.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="https://apps.shopify.com/store-locator-by-metizsoft" target="_blank" rel="noopener noreferrer">
                  Create Your Store Locator Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="space-y-12">
              {storeExamples.map((example, index) => (
                <Card key={example.name} className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold">
                            {index + 1}. {example.name}
                          </h3>
                          <Button variant="outline" size="sm" asChild>
                            <a href={example.url} target="_blank" rel="noopener noreferrer">
                              Try It <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>

                        <p className="text-muted-foreground mb-6">{example.description}</p>

                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {example.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {example.demoImage && (
                        <div className="flex-1">
                          <img
                            src={example.demoImage}
                            alt={`${example.name} Demo`}
                            className="w-full rounded-lg border shadow-lg"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="p-8 bg-primary/5">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Store Locator?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join thousands of businesses that trust MSPL Store Locator to help their customers find them. 
                  Get started today with our easy-to-use platform and customizable design options.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="https://storelocator.in/contact" target="_blank" rel="noopener noreferrer">
                    Start Building Your Store Locator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}



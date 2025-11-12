import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Upload, Settings, Filter, MapPin, BarChart3, Zap, 
  FileSpreadsheet, RefreshCw, Search, Navigation, Tags, 
  Palette, Users, Map, Globe, MessageCircle, 
  Smartphone, Compass, Clock, Type
} from "lucide-react";

const featureCategories = [
  {
    title: "A Piece of Cake to Manage",
    features: [
      {
        icon: Settings,
        title: "Easily Add & Edit Locations",
        description: "Add, edit, and upload locations easily using the intuitive dashboard. You can also sync your locations directly from a Google Sheet for quick updates."
      },
      {
        icon: Upload,
        title: "Bulk CSV Import or Google Sheets",
        description: "Easily import location data in bulk from CSV files or Google Sheets. Keep your store locator updated with minimal effort."
      },
      {
        icon: RefreshCw,
        title: "Sync from Google Sheets",
        description: "Automatically update your store information by connecting to Google Sheets. Real-time location syncing ensures consistency across all channels."
      }
    ]
  },
  {
    title: "Delightful to Use",
    features: [
      {
        icon: Search,
        title: "Search by Zip, City, Postcode",
        description: "Our locator offers an intuitive search feature that allows customers to find the nearest stores quickly by searching with Zip, City, or Postcode."
      },
      {
        icon: Navigation,
        title: "Automatically Detected Location",
        description: "Users will instantly see nearby locations based on their current location (if enabled) using geolocation."
      },
      {
        icon: Filter,
        title: "Product, Category & Tag Filtering",
        description: "Filter results by product types, categories, or tags to help users quickly find the exact store that offers what they need."
      },
      {
        icon: Tags,
        title: "Custom Fields & Buttons",
        description: "Add custom fields like extra information or buttons to each location. Perfect for highlighting special offers or additional services."
      }
    ]
  },
  {
    title: "Beautifully Designed",
    features: [
      {
        icon: Palette,
        title: "Customize Everything",
        description: "Adjust the look and feel of your store locator to match your brand's aesthetic. Use our powerful editor or your own CSS for detailed customization."
      },
      {
        icon: Users,
        title: "Free Brand Styling Service",
        description: "Let our developers help you style your store locator to perfectly fit your brand. Custom branding is included in all plans."
      },
      {
        icon: MapPin,
        title: "Custom Map Markers",
        description: "Personalize your map markers with custom colors or icons to reflect the type of location, service, or product available."
      },
      {
        icon: Map,
        title: "Custom Map Themes",
        description: "Create a unique map theme using your brand's colors. Use dark maps, greyscale, or even your own customized map designs."
      }
    ]
  },
  {
    title: "Additional Features for Convenience",
    features: [
      {
        icon: BarChart3,
        title: "Valuable Metrics & Analytics",
        description: "Monitor store searches and discover new locations through detailed metrics."
      },
      {
        icon: Globe,
        title: "Anywhere & Any Language",
        description: "Expand to multiple locations globally. Support multiple languages and offer region-specific store locators."
      },
      {
        icon: MessageCircle,
        title: "Top-Rated Support",
        description: "Our team is always ready to assist you with customizing and setting up your store locator. We promise quick and reliable support."
      },
      {
        icon: Smartphone,
        title: "Great on Mobile",
        description: "The store locator is fully responsive, ensuring your customers can access it easily on their phones, tablets, or computers."
      },
      {
        icon: Compass,
        title: "Instant Directions",
        description: "Users can get directions with the click of a button, making it easier to navigate from their current location to your store."
      }
    ]
  },
  {
    title: "Customization at Its Best",
    features: [
      {
        icon: Search,
        title: "Keyword Search",
        description: "Allow users to search for locations using specific keywords or store names to enhance the user experience."
      },
      {
        icon: Clock,
        title: "Open Hours",
        description: "Optionally show the store's hours to provide helpful information to users before visiting."
      },
      {
        icon: Type,
        title: "Your Fonts & Colors",
        description: "Personalize your store locator with your brand's fonts and colors to keep your experience seamless."
      }
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="my-[10px] p-[10px] bg-background">
      <div className="container mx-auto px-4 my-[10px]">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="h-4 w-4" />
            Shopify Store Locator App Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-hero bg-clip-text text-transparent">Key Features That Work as a Shopify Store Finder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create a smooth store locator experience across multiple Shopify stores.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {featureCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              {/* Category Header */}
              <h3 className="text-2xl font-bold text-foreground mb-8">
                {category.title}
              </h3>
              
              {/* Features List */}
              <div className="space-y-8">
                {category.features.map((feature, featureIndex) => (
                  <div 
                    key={feature.title}
                    className="flex gap-4 items-start group"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
import { MapPin, Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Overview", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Store Locator Examples", href: "/store-locator-examples" },
      { label: "Platforms", href: "#" },
      { label: "Use Cases", href: "#" },
      { label: "Store Locator Software", href: "/store-locator-examples" },
      { label: "Dealer Locator Software", href: "#" },
      { label: "MSPL Store Locator", href: "https://apps.shopify.com/store-locator-by-metizsoft" },
      { label: "Store Locator Widget", href: "#" }
    ],
    features: [
      { label: "Google Maps & MapBox Integration", href: "#" },
      { label: "Bulk Upload & CSV Import", href: "#" },
      { label: "Customizable Maps & Icons", href: "#" },
      { label: "Search Filters & Location Search", href: "#" },
      { label: "Analytics & Performance Tracking", href: "#" },
      { label: "Mobile-Responsive Design", href: "#" },
      { label: "Remove Branding Options", href: "#" },
      { label: "Unlimited Locations", href: "#" }
    ],
    platforms: [
      { label: "Squarespace Store Locator", href: "#" },
      { label: "Shopify Store Locator", href: "#" },
      { label: "Joomla Store Locator", href: "#" },
      { label: "Wordpress Store Locator", href: "#" },
      { label: "Elementor Store Locator", href: "#" },
      { label: "BigCommerce Store Locator", href: "#" },
      { label: "Webflow Store Locator", href: "#" },
      { label: "Wix Store Locator", href: "#" },
      { label: "Weebly Store Locator", href: "#" },
      { label: "and many, many more...", href: "#" }
    ],
    developers: [
      { label: "Locator Platform", href: "#" },
      { label: "Widget JavaScript API", href: "#" },
      { label: "Location Management API", href: "#" }
    ],
    resources: [
      { label: "Help & Support", href: "https://support.metizsoft.com/portal/en/kb/store-locator-by-metizsoft" },
      { label: "FAQ", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Add a store locator to Squarespace", href: "#" },
      { label: "Add a store locator to Shopify", href: "#" },
      { label: "Add a store locator to Wordpress", href: "#" },
      { label: "Add a store locator to Webflow", href: "#" },
      { label: "Add a store locator to your website", href: "#" }
    ],
    contact: [
      { label: "Email Us", href: "mailto:hello@metizsoft.com" }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t">
      <div className="container mx-auto px-6 py-12 lg:py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-x-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-[5px] flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e38b2a7e-a356-4be7-a266-c52662189454.png" 
                  alt="MSPL Store Locator Logo" 
                  className="h-12 w-12 object-contain rounded-[5px]"
                />
              </div>
              <div>
                <div className="font-bold text-lg leading-none">MSPL Store Locator</div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              The easiest way to create a beautiful, fully customized store locator app for your website.
            </p>

          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Features</h4>
            <ul className="space-y-2">
              {footerLinks.features.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Platforms</h4>
            <ul className="space-y-2">
              {footerLinks.platforms.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Developers</h4>
            <ul className="space-y-2">
              {footerLinks.developers.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.resources.slice(2).map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-6 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © Metizsoft, 2025
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About us
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
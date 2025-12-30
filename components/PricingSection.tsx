"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    period: "forever",
    description: "Perfect for testing our service",
    icon: Star,
    popular: false,
    features: [
      "Up to 3 locations",
      "Basic map interface",
      "Standard support",
      "Metizsoft branding"
    ]
  },
  {
    name: "Basic Plan", 
    price: "$5.99",
    period: "per month",
    description: "Great for small businesses",
    icon: Zap,
    popular: true,
    features: [
      "Up to 50 locations",
      "Remove branding",
      "Email support",
      "Basic customization",
      "Mobile responsive"
    ]
  },
  {
    name: "Standard Plan",
    price: "$9.99", 
    period: "per month",
    description: "Most popular for growing stores",
    icon: Crown,
    popular: false,
    features: [
      "Up to 500 locations",
      "CSV import/export",
      "Analytics dashboard",
      "Advanced filters",
      "Priority support",
      "Custom styling"
    ]
  },
  {
    name: "Business Plan",
    price: "$15.99",
    period: "per month", 
    description: "For enterprise-level needs",
    icon: Rocket,
    popular: false,
    features: [
      "Unlimited locations",
      "Custom CSS styling",
      "Advanced analytics",
      "API access",
      "Dedicated support",
      "White-label solution",
      "Custom integrations"
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="my-[15px] py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-hero bg-clip-text text-transparent">Find the Right Plan for Your Store</span>
          </h2>
          <p className="text-xl text-muted-foreground mx-auto whitespace-nowrap">
            Try the store locator  free version and upgrade as your business grows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className="relative group transition-smooth hover:-translate-y-2 bg-primary text-primary-foreground shadow-glow border-0 flex flex-col h-full"
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white shadow-card font-semibold">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center space-y-4 pb-4 rounded-t-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full mx-auto bg-primary-foreground/20 text-primary-foreground">
                  <plan.icon className="h-6 w-6" />
                </div>
                
                <div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    {plan.description}
                  </CardDescription>
                </div>

                <div className="space-y-1">
                  <div className="text-4xl font-bold">
                    {plan.price}
                  </div>
                  <p className="text-sm text-primary-foreground/70">
                    {plan.period}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-primary-foreground" />
                    <span className="text-sm text-primary-foreground/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-4">
                <Button 
                  variant="secondary"
                  size="lg" 
                  className="w-full group-hover:scale-105 transition-transform"
                  asChild
                >
                  <a href="https://apps.shopify.com/store-locator-by-metizsoft?search_id=d4364157-915e-41b0-9b8f-380eabfd7a47&surface_detail=metizsoft&surface_inter_position=1&surface_intra_position=5&surface_type=search" target="_blank" rel="noopener noreferrer">
                    {plan.price === "$0" ? "Get Started Free" : "Choose Plan"}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
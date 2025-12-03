"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Upload, Settings, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install the App",
    description: "Add the Store Locator app to your Shopify store with just one click from the app store."
  },
  {
    number: "02", 
    icon: Upload,
    title: "Upload Store Data",
    description: "Import your store locations using a CSV file or add them manually through our intuitive interface."
  },
  {
    number: "03",
    icon: Settings,
    title: "Customize & Embed",
    description: "Adjust settings to match your brand and embed the locator on your desired page."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="mt-[10px] p-[10px] gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Simple Integration in 
            <span className="gradient-hero bg-clip-text text-transparent"> Three Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your store locator app up and running in minutes, not hours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connection arrow - perfectly centered between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 left-full w-8 -ml-4 transform -translate-y-1/2 z-10 items-center justify-center">
                  <div className="w-full h-0.5 bg-primary"></div>
                  <ArrowRight className="absolute right-0 translate-x-1/2 h-5 w-5 text-primary" />
                </div>
              )}
              
              <Card className="relative overflow-hidden gradient-card border-0 shadow-card group-hover:shadow-elegant transition-smooth group-hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/15 group-hover:text-primary/25 transition-colors" aria-hidden="true">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full gradient-hero text-primary-foreground group-hover:scale-110 transition-transform shadow-glow">
                      <step.icon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border rounded-2xl p-6 shadow-card">
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-lg mb-1">Ready to get started?</h3>
              <p className="text-sm text-muted-foreground">Join thousands of stores already using our locator</p>
            </div>
            <Button variant="cta" size="lg" className="shrink-0" asChild>
              <a href="https://apps.shopify.com/store-locator-by-metizsoft?search_id=d4364157-915e-41b0-9b8f-380eabfd7a47&surface_detail=metizsoft&surface_inter_position=1&surface_intra_position=5&surface_type=search" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
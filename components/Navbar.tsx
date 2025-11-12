"use client";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
    { label: "Support", href: "https://support.metizsoft.com/portal/en/kb/store-locator-by-metizsoft", external: true },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-[5px] flex items-center justify-center">
              <img 
                src="/lovable-uploads/e38b2a7e-a356-4be7-a266-c52662189454.png" 
                alt="MSPL Store Locator Logo" 
                className="h-8 w-8 object-contain rounded-[5px]"
              />
            </div>
            <div>
              <div className="font-bold text-lg leading-none">MSPL Store Locator</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.external ? (
                <a key={link.label} href={link.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href as any} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
           
            <Button variant="cta" size="sm" asChild>
              <a href="https://apps.shopify.com/store-locator-by-metizsoft?search_id=d4364157-915e-41b0-9b8f-380eabfd7a47&surface_detail=metizsoft&surface_inter_position=1&surface_intra_position=5&surface_type=search" target="_blank" rel="noopener noreferrer">
                Get Started Free
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border/50 bg-background/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  target="_blank" rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href as any}
                  className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-border/50">
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <a href="https://apps.shopify.com/store-locator-by-metizsoft?search_id=d4364157-915e-41b0-9b8f-380eabfd7a47&surface_detail=metizsoft&surface_inter_position=1&surface_intra_position=5&surface_type=search" target="_blank" rel="noopener noreferrer">
                  Sign In
                </a>
              </Button>
              <Button variant="cta" size="sm" className="w-full" asChild>
                <a href="https://apps.shopify.com/store-locator-by-metizsoft?search_id=d4364157-915e-41b0-9b8f-380eabfd7a47&surface_detail=metizsoft&surface_inter_position=1&surface_intra_position=5&surface_type=search" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
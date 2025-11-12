import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubscribed(true);
      setEmail("");
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto gradient-card border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                You've successfully subscribed to our newsletter. You'll receive the latest articles and insights directly in your inbox.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSubscribed(false)}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                Subscribe Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto gradient-card border-0 shadow-card">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail className="h-4 w-4" />
              Newsletter
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Stay Updated with
              <span className="gradient-hero bg-clip-text text-transparent"> Latest Insights</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter and get the latest articles, tips, and industry insights delivered to your inbox every week.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary"
                  required
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary-soft text-primary-foreground px-8 whitespace-nowrap"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
              </p>
            </form>

            <div className="mt-8 pt-6 border-t border-border/20">
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Weekly articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Industry insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Expert tips</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogNewsletter;
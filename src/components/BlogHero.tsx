import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export const BlogHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Welcome to{" "}
              <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">
                HejdijaID
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Your digital identity, reimagined. Explore insights, tutorials, and perspectives 
              on modern web development, design, and technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-hero)]"
            >
              Explore Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:bg-primary/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Readers Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
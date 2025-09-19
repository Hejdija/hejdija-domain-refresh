import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const BlogFooter = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-[var(--gradient-hero)] bg-clip-text text-transparent">
              HejdijaID
            </h3>
            <p className="text-sm text-muted-foreground">
              Your digital identity, reimagined. Building the future of web development, one article at a time.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Categories</h4>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Development
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Design
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Tutorials
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Performance
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest articles delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 HejdijaID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, Search, User } from "lucide-react";

export const BlogHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold bg-[var(--gradient-hero)] bg-clip-text text-transparent">
              HejdijaID
            </h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#" className="transition-colors hover:text-primary">
            Home
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            Blog
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            About
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
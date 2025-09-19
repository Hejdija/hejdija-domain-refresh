import { BlogHeader } from "@/components/BlogHeader";
import { BlogHero } from "@/components/BlogHero";
import { BlogGrid } from "@/components/BlogGrid";
import { BlogFooter } from "@/components/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <BlogFooter />
    </div>
  );
};

export default Index;

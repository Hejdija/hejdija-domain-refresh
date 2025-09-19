import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    title: "Building Modern Web Applications with React and TypeScript",
    description: "Dive deep into the world of modern web development. Learn how to build scalable, maintainable applications using React, TypeScript, and the latest development tools and practices.",
    date: "Sep 15, 2025",
    readTime: "8 min read",
    category: "Development",
    image: "/placeholder.svg",
    featured: true
  },
  {
    title: "The Future of Web Design",
    description: "Exploring emerging trends in web design and user experience. From AI-powered interfaces to immersive experiences.",
    date: "Sep 12, 2025",
    readTime: "5 min read",
    category: "Design",
    image: "/placeholder.svg"
  },
  {
    title: "Optimizing Performance in React Applications",
    description: "Learn practical techniques to improve your React app's performance, from code splitting to efficient state management.",
    date: "Sep 10, 2025",
    readTime: "12 min read",
    category: "Performance",
    image: "/placeholder.svg"
  },
  {
    title: "Getting Started with Next.js 14",
    description: "A comprehensive guide to building full-stack applications with the latest version of Next.js and its new features.",
    date: "Sep 8, 2025",
    readTime: "10 min read",
    category: "Tutorial",
    image: "/placeholder.svg"
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    description: "Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method.",
    date: "Sep 5, 2025",
    readTime: "6 min read",
    category: "CSS",
    image: "/placeholder.svg"
  },
  {
    title: "Building Accessible Web Applications",
    description: "Essential practices for creating inclusive web experiences that work for everyone, regardless of their abilities.",
    date: "Sep 3, 2025",
    readTime: "9 min read",
    category: "Accessibility",
    image: "/placeholder.svg"
  }
];

export const BlogGrid = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover insights, tutorials, and thoughts on web development, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              image={post.image}
              featured={post.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    title: "Membangun Aplikasi Web Modern dengan React dan TypeScript",
    description: "Mendalami dunia pengembangan web modern. Pelajari cara membangun aplikasi yang scalable dan maintainable menggunakan React, TypeScript, dan tools terbaru.",
    date: "15 Sep 2024",
    readTime: "8 menit baca",
    category: "Teknologi",
    image: "/placeholder.svg",
    featured: true
  },
  {
    title: "Tren Terbaru dalam Pengembangan Web",
    description: "Eksplorasi tren emerging dalam desain web dan user experience. Dari interface berbasis AI hingga pengalaman immersive.",
    date: "12 Sep 2024", 
    readTime: "5 menit baca",
    category: "Design",
    image: "/placeholder.svg"
  },
  {
    title: "Tips Optimasi Performance Aplikasi React",
    description: "Pelajari teknik praktis untuk meningkatkan performa aplikasi React Anda, dari code splitting hingga state management yang efisien.",
    date: "10 Sep 2024",
    readTime: "12 menit baca",
    category: "Performance",
    image: "/placeholder.svg"
  },
  {
    title: "Panduan Lengkap Next.js 14 untuk Pemula",
    description: "Panduan komprehensif untuk membangun aplikasi full-stack dengan versi terbaru Next.js dan fitur-fitur barunya.",
    date: "8 Sep 2024",
    readTime: "10 menit baca",
    category: "Tutorial",
    image: "/placeholder.svg"
  },
  {
    title: "CSS Grid vs Flexbox: Kapan Menggunakan Apa",
    description: "Memahami perbedaan antara CSS Grid dan Flexbox, serta mengetahui kapan harus menggunakan masing-masing metode layout.",
    date: "5 Sep 2024",
    readTime: "6 menit baca",
    category: "CSS",
    image: "/placeholder.svg"
  },
  {
    title: "Membangun Aplikasi Web yang Accessible",
    description: "Praktik essential untuk menciptakan pengalaman web yang inklusif untuk semua orang, terlepas dari kemampuan mereka.",
    date: "3 Sep 2024",
    readTime: "9 menit baca",
    category: "Accessibility",
    image: "/placeholder.svg"
  },
  {
    title: "Panduan Migrasi WordPress ke React",
    description: "Langkah demi langkah proses migrasi dari WordPress ke aplikasi React modern dengan mempertahankan SEO dan konten.",
    date: "1 Sep 2024",
    readTime: "15 menit baca",
    category: "Migrasi",
    image: "/placeholder.svg"
  },
  {
    title: "Keamanan Web: Best Practices 2024",
    description: "Panduan komprehensif tentang praktik keamanan web terbaru untuk melindungi aplikasi dan data pengguna.",
    date: "28 Ags 2024",
    readTime: "11 menit baca",
    category: "Keamanan",
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
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata = {
  title: "Blog Catamaran Martinique - Guides & Conseils",
  description:
    "Guides pratiques, conseils d'experts et articles sur les excursions en catamaran en Martinique. Tout ce que vous devez savoir avant de naviguer.",
};

export default async function BlogIndexPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <div className="bg-background pt-12 min-h-screen">
      {/* Hero */}
      <div className="wave-bg py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Notre Journal
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Blog &amp;{" "}
            <span className="font-serif italic text-secondary">Guides Nautiques</span>
          </h1>
          <p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Guides pratiques, conseils de navigation et récits d&apos;excursions pour profiter
            au maximum de votre séjour en catamaran en Martinique.
          </p>
        </div>
      </div>

      {/* Vague de transition */}
      <div className="overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-10">
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z"
            fill="hsl(185 60% 25%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-20 animate-fade-in-up">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {posts.map((post) => (
              <div key={post.id} className="h-full">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center max-w-3xl mx-auto italic text-lg text-foreground/70 py-24 glass-card rounded-[2rem] mb-24"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Aucun article publié pour le moment.
          </div>
        )}
      </div>
    </div>
  );
}

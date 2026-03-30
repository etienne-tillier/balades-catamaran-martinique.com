import { getCategoryBySlug, getPostsByCategory } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { notFound } from "next/navigation";

export const revalidate = 21600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.label} | Blog Catamaran Martinique`,
    description: `Articles et guides dans la catégorie ${category.label} — Balades Catamaran Martinique.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return notFound();

  const posts = await getPostsByCategory(slug);

  return (
    <div className="bg-background pt-12 min-h-screen">
      {/* Header */}
      <div className="wave-bg py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Catégorie
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {category.label}
          </h1>
        </div>
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

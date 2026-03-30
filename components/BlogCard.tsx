import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  const imageUrl = post.cover?.file_url || "/images/home-hero.jpeg";
  const imageAlt = post.cover?.alt || post.h1;

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group-hover:-translate-y-2 transition-all duration-300">
        {/* Image */}
        <div className="w-full h-52 relative overflow-hidden bg-muted/20">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          {post.categories?.[0] && (
            <span
              className="absolute top-3 left-3 badge-nautique"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {post.categories[0].label}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3
            className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {post.h1}
          </h3>
          {post.meta_description && (
            <p
              className="text-foreground/70 text-sm line-clamp-3 mb-5 leading-relaxed"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              {post.meta_description}
            </p>
          )}

          <div className="mt-auto flex items-center justify-between">
            <span
              className="text-primary font-semibold text-sm group-hover:text-secondary transition-colors flex items-center gap-1"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Lire l&apos;article
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            {post.published_at && (
              <span
                className="text-foreground/40 text-xs"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                {new Date(post.published_at).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

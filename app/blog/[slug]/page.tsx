import { MarkdownLink } from "@/components/MarkdownLink";
import { injectDofollowMarker } from "@/lib/dofollow";
import { getBlogPostBySlug } from "@/lib/blog";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { notFound } from "next/navigation";

const buildAlternatesByLocale = (post: { slug: string; default_locale?: string | null; translations?: unknown }) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  if (!siteOrigin || siteOrigin === "https://") {
    return {};
  }

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = `${siteOrigin}/blog/${post.slug}`;

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(post.translations as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug = typeof translation.slug === "string" ? translation.slug : "";
      const status = typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || status !== "published") continue;
      languages[locale] = `${siteOrigin}/blog/${translatedSlug}`;
    }
  }

  return languages;
};

export const revalidate = 21600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  let displayTitle = post.meta_title || post.h1;
  let displayDesc = post.meta_description;

  if (post.slug !== slug && post.translations) {
    for (const [, val] of Object.entries(post.translations)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((val as any).slug === slug) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        displayTitle = (val as any).meta_title || (val as any).h1 || displayTitle;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        displayDesc = (val as any).meta_description || displayDesc;
        break;
      }
    }
  }

  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: displayTitle,
    description: displayDesc,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return notFound();

  let displayH1 = post.h1;
  let displayBody = post.body_md;

  if (post.slug !== slug && post.translations) {
    for (const [, val] of Object.entries(post.translations)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((val as any).slug === slug) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        displayH1 = (val as any).h1 || displayH1;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        displayBody = (val as any).body_md || displayBody;
        break;
      }
    }
  }

  const bodyMd = injectDofollowMarker(displayBody || "");

  return (
    <div className="bg-background pt-12 pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl animate-fade-in-up">
        {/* Cover image */}
        {post.cover?.file_url && (
          <div className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl mb-12">
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || displayH1}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>
        )}

        {/* Métadonnées article */}
        <div className="mb-10">
          {post.categories?.[0] && (
            <span
              className="badge-nautique mb-4 inline-block"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {post.categories[0].label}
            </span>
          )}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {displayH1}
          </h1>
          <LanguageSwitcher post={post} currentSlug={slug} />
        </div>

        {/* Contenu markdown */}
        <article className="prose prose-lg max-w-none text-foreground/85 prose-headings:font-display prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-secondary prose-img:rounded-2xl prose-strong:text-foreground">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink } as any}>
            {bodyMd}
          </ReactMarkdown>
        </article>

        {/* Auteur */}
        {post.author && (
          <div className="glass-card flex items-center gap-6 mt-16 p-8 rounded-2xl animate-fade-in-up">
            {post.author.avatar_url && (
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                <Image
                  src={post.author.avatar_url}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p
                className="font-semibold text-xl text-foreground mb-1"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {post.author.name}
              </p>
              {post.author.bio && (
                <p
                  className="text-sm text-foreground/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {post.author.bio}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

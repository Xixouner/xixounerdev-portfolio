import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "~/lib/markdown";
import { categories, author } from "~/lib/blog-data";
import { BlogArticleContent } from "~/components/blog-article-content";

// ── Static generation ──────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllSlugs();
}

// ── Head (SEO) ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const url = `https://xixouner.com/blog/${slug}`;
  const catLabel =
    categories.find((c) => c.slug === post.category)?.label ?? post.category;

  return {
    title: `${post.title} | Blog XixounerDev`,
    description: post.description,
    keywords: [
      "blog développeur web",
      "conseils SEO",
      post.category,
      catLabel,
      "Alexis Trechot",
    ],
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url,
      siteName: "XixounerDev",
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: url,
    },
  };
}

// ── Page ────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const catLabel =
    categories.find((c) => c.slug === post.category)?.label ?? post.category;

  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `https://xixouner.com/blog/${slug}#article`,
            headline: post.title,
            description: post.description,
            image: `https://xixouner.com${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: author.name,
              url: author.url,
              jobTitle: author.jobTitle,
              sameAs: author.sameAs,
            },
            publisher: {
              "@type": "Organization",
              name: "XixounerDev",
              url: "https://xixouner.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://xixouner.com/blog/${slug}`,
            },
            articleSection: catLabel,
            wordCount: post.rawContent.split(/\s+/).length,
            inLanguage: "fr",
          }),
        }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://xixouner.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://xixouner.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: catLabel,
                item: `https://xixouner.com/blog/category/${post.category}`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: post.title,
              },
            ],
          }),
        }}
      />
      <BlogArticleContent post={post} />
    </>
  );
}

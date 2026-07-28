import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import type { BlogPost, BlogPostFrontmatter } from "~/lib/blog-data";
import { categories, categoryDirMap } from "~/lib/blog-data";

const CONTENT_ROOT = path.join(process.cwd(), "content", "blog");

// ── Pipeline Markdown → HTML ──────────────────────────────────────────
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeSlug)
  .use(rehypeStringify, { allowDangerousHtml: true });

export async function renderMarkdown(raw: string): Promise<string> {
  const result = await processor.process(raw);
  return String(result);
}

// ── Helpers ────────────────────────────────────────────────────────────
function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text
    .replace(/[#*`>\[\]()!\-|]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

function parseDate(dateStr: string): Date {
  return new Date(dateStr);
}

// ── Chargement des posts ───────────────────────────────────────────────
function readPostFiles(): { filePath: string; slug: string; category: BlogPostFrontmatter["category"] }[] {
  const results: { filePath: string; slug: string; category: BlogPostFrontmatter["category"] }[] = [];

  for (const cat of categories) {
    const dir = path.join(CONTENT_ROOT, categoryDirMap[cat.slug]);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const slug = file.replace(/\.md$/, "");
      results.push({
        filePath: path.join(dir, file),
        slug,
        category: cat.slug,
      });
    }
  }

  return results;
}

/** Retourne tous les posts triés par date décroissante (sans rendu HTML) */
export async function getAllPosts(): Promise<BlogPost[]> {
  const files = readPostFiles();
  const posts: BlogPost[] = [];

  for (const { filePath, slug, category } of files) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content: rawContent } = matter(raw);
    const fm = data as BlogPostFrontmatter;

    const content = await renderMarkdown(rawContent);

    posts.push({
      slug,
      title: fm.title,
      date: fm.date,
      category,
      description: fm.description,
      image: fm.image,
      readingTime: fm.readingTime ?? estimateReadingTime(rawContent),
      content,
      rawContent,
    });
  }

  return posts.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );
}

/** Retourne un post par son slug (sans le rendu HTML appelé deux fois) */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const files = readPostFiles();
  const match = files.find((f) => f.slug === slug);
  if (!match) return null;

  const raw = fs.readFileSync(match.filePath, "utf-8");
  const { data, content: rawContent } = matter(raw);
  const fm = data as BlogPostFrontmatter;

  const content = await renderMarkdown(rawContent);

  return {
    slug,
    title: fm.title,
    date: fm.date,
    category: match.category,
    description: fm.description,
    image: fm.image,
    readingTime: fm.readingTime ?? estimateReadingTime(rawContent),
    content,
    rawContent,
  };
}

/** Retourne tous les posts d'une catégorie */
export async function getPostsByCategory(
  cat: BlogPostFrontmatter["category"]
): Promise<BlogPost[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.category === cat);
}

/** Retourne tous les slugs pour generateStaticParams */
export function getAllSlugs(): { slug: string }[] {
  return readPostFiles().map((f) => ({ slug: f.slug }));
}

/** Retourne les catégories qui ont au moins un article */
export async function getActiveCategories(): Promise<
  BlogPostFrontmatter["category"][]
> {
  const posts = await getAllPosts();
  const active = new Set(posts.map((p) => p.category));
  return Array.from(active);
}

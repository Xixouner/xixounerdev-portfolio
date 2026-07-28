import Link from "next/link";
import { cn } from "~/lib/utils";
import { categories, type BlogPostFrontmatter } from "~/lib/blog-data";

interface CategoryPillsProps {
  active?: BlogPostFrontmatter["category"];
  className?: string;
}

export function CategoryPills({ active, className }: CategoryPillsProps) {
  return (
    <nav aria-label="Catégories du blog" className={cn("flex flex-wrap gap-2", className)}>
      <Link
        href="/blog"
        className={cn(
          "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
          !active
            ? "border-accent bg-accent/10 text-accent"
            : "border-border text-text-light hover:border-accent hover:text-accent"
        )}
      >
        Tout
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/blog/category/${cat.slug}`}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
            active === cat.slug
              ? "border-accent bg-accent/10 text-accent"
              : "border-border text-text-light hover:border-accent hover:text-accent"
          )}
          aria-current={active === cat.slug ? "page" : undefined}
        >
          {cat.label}
        </Link>
      ))}
    </nav>
  );
}

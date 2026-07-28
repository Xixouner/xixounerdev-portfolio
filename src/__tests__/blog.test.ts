import { describe, it, expect } from "vitest";
import { categories, POSTS_PER_PAGE, categoryDirMap, author } from "~/lib/blog-data";

describe("blog-data", () => {
  it("has exactly 3 categories", () => {
    expect(categories).toHaveLength(3);
  });

  it("each category has a valid slug, label, and description", () => {
    for (const cat of categories) {
      expect(cat.slug).toBeTruthy();
      expect(cat.label).toBeTruthy();
      expect(cat.description).toBeTruthy();
      expect(cat.description.length).toBeGreaterThan(20);
    }
  });

  it("category slugs match valid keys", () => {
    const validSlugs = ["seo-web", "devops-vps", "dev-web"];
    for (const cat of categories) {
      expect(validSlugs).toContain(cat.slug);
    }
  });

  it("categoryDirMap covers all categories", () => {
    for (const cat of categories) {
      expect(categoryDirMap[cat.slug]).toBeDefined();
    }
  });

  it("POSTS_PER_PAGE is a positive number", () => {
    expect(POSTS_PER_PAGE).toBeGreaterThan(0);
  });

  it("author has required fields", () => {
    expect(author.name).toBeTruthy();
    expect(author.url).toBeTruthy();
    expect(author.jobTitle).toBeTruthy();
    expect(author.sameAs.length).toBeGreaterThan(0);
  });
});

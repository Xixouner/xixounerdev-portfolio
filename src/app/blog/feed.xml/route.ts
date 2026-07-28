import { getAllPosts } from "~/lib/markdown";

export async function GET() {
  const posts = await getAllPosts();
  const latest20 = posts.slice(0, 20);

  const items = latest20
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://xixouner.com/blog/${post.slug}</link>
      <guid isPermaLink="true">https://xixouner.com/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog XixounerDev</title>
    <link>https://xixouner.com/blog</link>
    <description>Articles concrets sur le SEO, le DevOps, l'hébergement VPS et le développement web. Par Alexis Trechot, développeur freelance à Clermont-Ferrand.</description>
    <language>fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://xixouner.com/blog/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

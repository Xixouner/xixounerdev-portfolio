import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Conseils SEO, DevOps & Dev Web | XixounerDev",
  description:
    "Articles concrets sur le référencement, l'hébergement VPS, le développement web et les technos qui marchent. Par Alexis Trechot, dev freelance à Clermont-Ferrand.",
  keywords: [
    "blog développeur web",
    "conseils SEO",
    "tuto VPS Docker",
    "Next.js vs WordPress",
    "hébergement web",
    "performance site web",
    "développeur freelance blog",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xixouner.com/blog",
    siteName: "XixounerDev",
    title: "Blog — Conseils SEO, DevOps & Dev Web | XixounerDev",
    description:
      "Articles concrets sur le référencement, l'hébergement VPS, le développement web et les technos qui marchent.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog XixounerDev — SEO, DevOps & Dev Web",
    description:
      "Conseils concrets d'un développeur freelance. Pas de bullshit, que du pratique.",
  },
  alternates: {
    canonical: "https://xixouner.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
            ],
          }),
        }}
      />
      <div className="min-h-screen pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-6">{children}</div>
      </div>
    </>
  );
}

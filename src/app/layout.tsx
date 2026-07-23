import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Développeur Web Freelance Pas Cher & Rapide | XixounerDev",
  description:
    "Alexis Trechot — Développeur web freelance à Clermont-Ferrand. Création de sites sur-mesure pas chers, rapides et sécurisés. Fullstack & DevOps. Devis gratuit sous 24h.",
  keywords: [
    "développeur web freelance",
    "développeur web pas cher",
    "création site web rapide",
    "freelance développement web",
    "développeur fullstack freelance",
    "devops freelance",
    "hébergement web pas cher",
    "création site sur mesure",
    "développeur Clermont-Ferrand",
    "site web rapide pas cher",
  ],
  metadataBase: new URL("https://xixouner.com"),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xixouner.com",
    siteName: "XixounerDev",
    title: "Développeur Web Freelance Pas Cher & Rapide | XixounerDev",
    description:
      "Développeur web freelance à Clermont-Ferrand. Sites sur-mesure rapides, pas chers, sécurisés et bien hébergés. Devis gratuit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "XixounerDev | Dev Web Freelance Pas Cher & Rapide",
    description:
      "Sites sur-mesure rapides, pas chers, sécurisés. Devis gratuit.",
  },
  alternates: {
    canonical: "https://xixouner.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "XixounerDev",
              description:
                "Développeur web freelance à Clermont-Ferrand. Création de sites sur-mesure pas chers, rapides et sécurisés. Fullstack & DevOps.",
              url: "https://xixouner.com",
              areaServed: "Clermont-Ferrand, Auvergne, France",
              priceRange: "€€",
              founder: {
                "@type": "Person",
                name: "Alexis Trechot",
                jobTitle: "Développeur Web Freelance & DevOps",
                url: "https://xixouner.com",
              },
              serviceType: [
                "Création de site web",
                "Développement web sur-mesure",
                "Hébergement web",
                "DevOps & Dockerisation",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

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
  title: "Développeur Web Freelance Pas Cher & Rapide | XixounerDev Clermont-Ferrand",
  description:
    "Besoin d'un site pro ? Développeur freelance à Clermont-Ferrand. Sites sur-mesure dès 500€, rapides, sécurisés, hébergés. Fullstack & DevOps. Devis gratuit sous 24h.",
  keywords: [
    "développeur web freelance",
    "développeur web pas cher",
    "création site web rapide",
    "freelance développement web",
    "développeur fullstack freelance",
    "devops freelance",
    "hébergement web pas cher",
    "création site sur mesure Clermont",
    "développeur Clermont-Ferrand",
    "site web rapide pas cher",
    "freelance informatique Auvergne",
    "créer site internet prix",
  ],
  metadataBase: new URL("https://xixouner.com"),
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      noimageindex: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xixouner.com",
    siteName: "XixounerDev",
    title: "Développeur Web Freelance Pas Cher & Rapide | XixounerDev",
    description:
      "Développeur web freelance à Clermont-Ferrand. Sites sur-mesure dès 500€, rapides, sécurisés et bien hébergés. Devis gratuit sous 24h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "XixounerDev | Dev Web Freelance Pas Cher & Rapide",
    description:
      "Sites sur-mesure dès 500€, rapides, sécurisés, hébergés. Devis gratuit.",
  },
  alternates: {
    canonical: "https://xixouner.com",
    languages: {
      fr: "https://xixouner.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://xixouner.com/#org",
              name: "XixounerDev",
              description:
                "Développeur web freelance à Clermont-Ferrand. Création de sites sur-mesure pas chers, rapides et sécurisés. Fullstack & DevOps.",
              url: "https://xixouner.com",
              areaServed: "Clermont-Ferrand, Auvergne, France",
              priceRange: "€€",
              sameAs: [
                "https://www.malt.fr/profile/alexistrechot?overview",
                "https://www.linkedin.com/in/alexis-trechot-7b33b1280",
                "https://github.com/Xixouner",
              ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://xixouner.com/#local",
              name: "XixounerDev",
              image: "https://xixouner.com/photo_pro.jpg",
              url: "https://xixouner.com",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Clermont-Ferrand",
                addressRegion: "Auvergne",
                addressCountry: "FR",
              },
              sameAs: [
                "https://www.malt.fr/profile/alexistrechot?overview",
                "https://www.linkedin.com/in/alexis-trechot-7b33b1280",
                "https://github.com/Xixouner",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://xixouner.com/#website",
              url: "https://xixouner.com",
              name: "XixounerDev",
              description:
                "Développeur web freelance. Sites sur-mesure pas chers, rapides, sécurisés.",
              inLanguage: "fr",
              publisher: { "@id": "https://xixouner.com/#org" },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Création de site web",
                    description: "À partir de 500 € HT.",
                    url: "https://xixouner.com/#services",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Outils sur-mesure & Productivité",
                    description: "À partir de 500 € HT.",
                    url: "https://xixouner.com/#services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Hébergement & DevOps",
                    description: "À partir de 5 € / mois.",
                    url: "https://xixouner.com/#services",
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quels sont vos tarifs pour la création d'un site web ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mes créations de sites web sur-mesure démarrent à partir de 500 € HT. Le prix exact dépend de vos besoins et fait l'objet d'un devis détaillé gratuit après échange.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quel est le délai pour créer un site internet ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Je réponds à votre demande sous 24h. Le délai de réalisation dépend de la complexité du projet : de quelques jours pour un site vitrine simple à quelques semaines pour un projet plus ambitieux.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Proposez-vous l'hébergement du site ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Oui, je gère l'intégralité de l'hébergement sur des serveurs professionnels (Hetzner) avec Docker, certificats SSL, sauvegardes automatiques et monitoring. À partir de 5 € par mois.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Où êtes-vous basé ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Je suis développeur freelance à Clermont-Ferrand et je travaille avec des clients partout en France (TPE, PME, associations, startups).",
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

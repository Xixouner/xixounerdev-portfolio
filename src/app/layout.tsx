import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
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
    images: [
      {
        url: "https://xixouner.com/og-home.svg",
        width: 1200,
        height: 630,
        alt: "XixounerDev — Développeur Web Freelance à Clermont-Ferrand",
      },
    ],
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
              image: "https://xixouner.com/photo_pro.webp",
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
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://xixouner.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
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
        <Header />
        {children}
        <Footer />

        {/* Matomo — cookieless, RGPD-friendly */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['disableCookies']);
              _paq.push(['setRequestMethod', 'POST']);
              _paq.push(['enableLinkTracking']);
              _paq.push(['trackPageView']);
              (function() {
                var u="//matomo.xixouner.com/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        />

        {/* WhatsApp flottant + pop-up devis */}
        <script dangerouslySetInnerHTML={{__html: `
          // WhatsApp
          var wa = document.createElement("a");
          wa.href = "https://wa.me/3361423948";
          wa.target = "_blank";
          wa.style.cssText = "position:fixed;bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.25);z-index:9999;";
          wa.setAttribute("aria-label", "Me contacter sur WhatsApp");
          wa.innerHTML = "<svg viewBox='0 0 24 24' width='28' height='28' fill='white'><path d='M12 2C6.477 2 2 6.477 2 12c0 2.05.65 3.948 1.764 5.512L3 22l4.488-.764A9.988 9.988 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z'/><path d='M16.515 13.43c-.211-.105-1.253-.618-1.447-.689-.194-.07-.335-.105-.476.105-.141.211-.545.689-.668.83-.123.141-.247.158-.458.053-.211-.106-.884-.326-1.684-1.04-.622-.556-1.042-1.24-1.164-1.45-.123-.211-.013-.326.092-.431.094-.094.211-.247.317-.37.106-.124.141-.212.212-.353.07-.141.035-.264-.018-.37-.053-.106-.476-1.148-.653-1.572-.172-.411-.346-.355-.476-.353l-.407-.006c-.141 0-.37.053-.564.264-.194.212-.741.724-.741 1.765s.759 2.047.865 2.188c.106.141 1.5 2.282 3.63 3.141.507.205.901.328 1.21.423.51.16.974.137 1.323.083.405-.063 1.253-.512 1.429-1.006.176-.494.176-.918.123-1.006-.053-.089-.194-.141-.405-.247z'/></svg>";
          wa.onclick = function() {
            var p = window._paq || []; p.push(["trackEvent", "Contact", "WhatsApp"]);
          };
          document.body.appendChild(wa);

          // Pop-up devis apres 30s
          setTimeout(function() {
            if (localStorage.getItem("popupShown")) return;
            var o = document.createElement("div");
            o.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:99998;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);";
            o.innerHTML = "<div style='background:linear-gradient(135deg,#1e293b,#0f172a);border:1px solid #334155;border-radius:20px;padding:40px;max-width:420px;width:90%;text-align:center;'><h2 style='color:#818cf8;font-size:22px;margin-bottom:8px;'>Besoin d un site web ?</h2><p style='color:#94a3b8;font-size:14px;line-height:1.6;margin-bottom:20px;'>Je cree des sites modernes, rapides et securises a partir de 500€</p><a href='#contact' style='display:inline-block;background:#818cf8;color:#0f172a;padding:12px 28px;border-radius:10px;font-weight:600;text-decoration:none;' onclick='localStorage.setItem(\'popupShown\',\'1\');this.closest(\'div > div\').parentElement.remove();'>Devis gratuit</a><button onclick='localStorage.setItem(\'popupShown\',\'1\');this.parentElement.parentElement.remove();' style='display:block;margin:12px auto 0;background:none;border:none;color:#64748b;font-size:12px;cursor:pointer;'>Non merci</button></div>";
            o.onclick = function(e) { if (e.target === o) { localStorage.setItem("popupShown","1"); o.remove(); } };
            document.body.appendChild(o);
          }, 30000);
        `}} />
      </body>
    </html>
  );
}
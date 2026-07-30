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

          // Pop-up devis après 30s — design system (cyan #06b6d4)
          setTimeout(function() {
            if (localStorage.getItem("popupShown")) return;

            var track = function(cat, act, nam) {
              var p = window._paq || [];
              p.push(["trackEvent", cat, act, nam]);
            };
            track("Popup", "Show", "Devis 30s");

            // Overlay
            var overlay = document.createElement("div");
            overlay.setAttribute("role", "dialog");
            overlay.setAttribute("aria-modal", "true");
            overlay.setAttribute("aria-label", "Besoin d\u2019un site web ? Demandez votre devis gratuit");
            overlay.style.cssText = "position:fixed;inset:0;background:rgba(15,23,42,0.72);z-index:99998;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;transition:opacity .35s ease;";

            // Card
            var card = document.createElement("div");
            card.style.cssText = "background:#fff;border-radius:20px;padding:48px 36px 36px;max-width:430px;width:92%;text-align:center;box-shadow:0 25px 60px -15px rgba(0,0,0,0.3);position:relative;transform:translateY(32px) scale(0.9);opacity:0;transition:all .45s cubic-bezier(0.34,1.56,0.64,1);";

            // Close function
            var closePopup = function(reason) {
              localStorage.setItem("popupShown", "1");
              if (reason) track("Popup", "Click", reason);
              overlay.style.opacity = "0";
              card.style.transform = "translateY(16px) scale(0.95)";
              card.style.opacity = "0";
              card.style.transition = "all .22s ease";
              document.body.style.overflow = "";
              setTimeout(function() { overlay.remove(); }, 250);
            };

            // Close button (✕)
            var closeBtn = document.createElement("button");
            closeBtn.innerHTML = "&times;";
            closeBtn.setAttribute("aria-label", "Fermer la pop-up");
            closeBtn.style.cssText = "position:absolute;top:12px;right:16px;background:none;border:none;font-size:26px;color:#94a3b8;cursor:pointer;line-height:1;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:8px;transition:color .2s,background .2s;";
            closeBtn.onmouseenter = function() { this.style.color = "#0f172a"; this.style.background = "#f1f5f9"; };
            closeBtn.onmouseleave = function() { this.style.color = "#94a3b8"; this.style.background = "none"; };
            closeBtn.onclick = function(e) { e.stopPropagation(); closePopup("Fermer"); };

            // Accent bar
            var accentBar = document.createElement("div");
            accentBar.style.cssText = "width:56px;height:4px;background:linear-gradient(90deg,#06b6d4,#22d3ee);border-radius:2px;margin:0 auto 24px;";

            // Rocket emoji
            var icon = document.createElement("div");
            icon.textContent = "\u{1F680}";
            icon.style.cssText = "font-size:36px;margin-bottom:14px;";

            // Title
            var title = document.createElement("p");
            title.id = "popup-title";
            title.style.cssText = "color:#0f172a;font-size:23px;font-weight:750;margin:0 0 10px;line-height:1.3;letter-spacing:-0.01em;";
            title.textContent = "Besoin d\u2019un site web ?";

            // Subtitle
            var subtitle = document.createElement("p");
            subtitle.style.cssText = "color:#475569;font-size:15px;line-height:1.65;margin:0 0 32px;padding:0 4px;";
            subtitle.textContent = "Je cr\u00e9e des sites modernes, rapides et s\u00e9curis\u00e9s \u00e0 partir de 500\u20ac";

            // CTA button
            var cta = document.createElement("a");
            cta.href = "#contact";
            cta.style.cssText = "display:inline-block;background:linear-gradient(135deg,#06b6d4,#0891b2);color:#fff;padding:14px 36px;border-radius:12px;font-weight:600;font-size:15px;text-decoration:none;box-shadow:0 4px 16px rgba(6,182,212,0.3);transition:transform .2s,box-shadow .2s;";
            cta.textContent = "Devis gratuit";
            cta.onmouseenter = function() { this.style.transform = "translateY(-2px)"; this.style.boxShadow = "0 8px 28px rgba(6,182,212,0.4)"; };
            cta.onmouseleave = function() { this.style.transform = ""; this.style.boxShadow = "0 4px 16px rgba(6,182,212,0.3)"; };
            cta.onclick = function(e) {
              e.preventDefault();
              closePopup("Devis gratuit");
              setTimeout(function() {
                var el = document.getElementById("contact");
                if (el) { el.scrollIntoView({ behavior: "smooth" }); window.location.hash = "contact"; }
              }, 300);
            };

            // Dismiss button
            var dismiss = document.createElement("button");
            dismiss.style.cssText = "display:block;margin:18px auto 0;background:none;border:none;color:#94a3b8;font-size:13px;cursor:pointer;padding:6px 14px;border-radius:6px;transition:color .2s,background .2s;";
            dismiss.textContent = "Non merci";
            dismiss.onmouseenter = function() { this.style.color = "#475569"; this.style.background = "#f8fafc"; };
            dismiss.onmouseleave = function() { this.style.color = "#94a3b8"; this.style.background = "none"; };
            dismiss.onclick = function(e) { e.stopPropagation(); closePopup("Non merci"); };

            // Assemble card
            card.appendChild(closeBtn);
            card.appendChild(icon);
            card.appendChild(accentBar);
            card.appendChild(title);
            card.appendChild(subtitle);
            card.appendChild(cta);
            card.appendChild(dismiss);
            overlay.appendChild(card);

            // Close on overlay click
            overlay.onclick = function(e) { if (e.target === overlay) closePopup("Overlay"); };

            // Close on Escape key
            document.addEventListener("keydown", function escHandler(e) {
              if (e.key === "Escape") { closePopup("Escape"); document.removeEventListener("keydown", escHandler); }
            });

            // Prevent body scroll while popup is visible
            document.body.style.overflow = "hidden";
            document.body.appendChild(overlay);

            // Animate in (double rAF ensures transition fires)
            requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                overlay.style.opacity = "1";
                card.style.opacity = "1";
                card.style.transform = "translateY(0) scale(1)";
              });
            });
          }, 30000);
        `}} />
      </body>
    </html>
  );
}
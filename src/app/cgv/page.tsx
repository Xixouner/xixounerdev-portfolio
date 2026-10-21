import Link from "next/link";
import { cgvData } from "~/lib/legal-cgv";

export const metadata = {
  title: "Conditions générales de vente | XixounerDev",
  description:
    "Conditions générales de vente de XixounerDev : prestations de création de site web, hébergement, maintenance et outils sur mesure. Version 1.0 du 21 octobre 2026.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://xixouner.com/cgv" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xixouner.com/cgv",
    siteName: "XixounerDev",
    title: "Conditions générales de vente | XixounerDev",
    description:
      "Conditions générales de vente de XixounerDev : création de site web, hébergement, maintenance et outils sur mesure.",
    images: [{ url: "https://xixouner.com/og-home.svg", width: 1200, height: 630 }],
  },
};

export default function Cgv() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Conditions générales de vente",
            url: "https://xixouner.com/cgv",
            dateModified: "2026-10-21",
            inLanguage: "fr-FR",
            isPartOf: { "@type": "WebSite", url: "https://xixouner.com" },
          }),
        }}
      />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-2 text-3xl font-bold text-primary">{cgvData.title}</h1>
        <p className="mb-8 text-sm text-text-muted">
          Version {cgvData.version} — mise à jour du {cgvData.updatedAt}
        </p>

        <p className="mb-8 text-text-light">{cgvData.intro}</p>

        <div className="space-y-8 text-text-light">
          {cgvData.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="mb-3 text-lg font-semibold text-primary">{section.title}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul className="list-disc space-y-1 pl-6">
                    {section.list.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-surface p-6 text-sm text-text-light">
          <p>
            Une question sur ces conditions ? Écrivez à{" "}
            <a className="underline underline-offset-4" href="mailto:contact@xixouner.com">
              contact@xixouner.com
            </a>
            . Voir aussi les{" "}
            <Link className="underline underline-offset-4" href="/mentions-legales">
              mentions légales
            </Link>{" "}
            et la{" "}
            <Link className="underline underline-offset-4" href="/confidentialite">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}

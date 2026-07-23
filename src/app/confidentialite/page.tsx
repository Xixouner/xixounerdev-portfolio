import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité | XixounerDev — Développeur Web Freelance",
  description:
    "Politique de confidentialité du site XixounerDev. Données collectées via formulaire de devis : nom, email, projet, budget. Conforme RGPD. Aucun cookie tracking.",
  robots: { index: true, follow: true },
};

export default function Confidentialite() {
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
                name: "Politique de confidentialité",
                item: "https://xixouner.com/confidentialite",
              },
            ],
          }),
        }}
      />
      <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-8 text-3xl font-bold text-primary">Politique de confidentialité</h1>

      <section className="space-y-6 text-text-light">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">1. Collecte des données</h2>
          <p>
            Lorsque vous utilisez le formulaire de demande de devis, nous collectons les données suivantes :
            nom, prénom, adresse email, type de projet, budget estimé, description du projet et source de découverte.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">2. Finalité du traitement</h2>
          <p>
            Ces données sont exclusivement utilisées pour répondre à votre demande de devis et établir une relation commerciale.
            Elles ne sont jamais revendues, cédées ou utilisées à des fins marketing sans votre consentement explicite.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">3. Base légale</h2>
          <p>
            Le traitement repose sur votre consentement (article 6.1.a du RGPD) que vous donnez en soumettant le formulaire.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">4. Durée de conservation</h2>
          <p>
            Les données sont conservées pendant la durée de l&apos;échange commercial et jusqu&apos;à 3 ans après le dernier contact.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">5. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
            de limitation et d&apos;opposition. Pour exercer ces droits, contactez-moi à alexistrechot@gmail.com.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">6. Cookies</h2>
          <p>
            Ce site n&apos;utilise aucun cookie de tracking. Aucun cookie publicitaire ou analytique n&apos;est déposé.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">7. Hébergement des données</h2>
          <p>
            Le site est hébergé sur des serveurs Hetzner (Allemagne, Union Européenne).
            Les emails sont traités via Resend (conforme RGPD).
          </p>
        </div>
      </section>

      <Link
        href="/"
        className="mt-12 inline-block text-sm text-accent underline-offset-4 hover:underline"
      >
        ← Retour à l&apos;accueil
      </Link>
    </main>
    </>
  );
}

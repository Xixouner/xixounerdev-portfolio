import Link from "next/link";

export const metadata = {
  title: "Mentions légales | XixounerDev",
  description:
    "Mentions légales du site XixounerDev — Alexis Trechot, entrepreneur individuel, développeur web freelance à Clermont-Ferrand. SIRET 999 699 101 00013.",
  robots: { index: true, follow: true },
  // Canonical auto-référent : sans lui, la page héritait du canonical de
  // l'accueil (posé dans le layout) et se déclarait copie de la home.
  alternates: { canonical: "https://xixouner.com/mentions-legales" },
  // og:url aligné sur le canonical : hérité du layout il pointait vers
  // l'accueil, ce qui contredisait le canonical (SOC-003).
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xixouner.com/mentions-legales",
    siteName: "XixounerDev",
    title: "Mentions légales | XixounerDev",
    description:
      "Mentions légales de XixounerDev — Alexis Trechot, développeur web freelance à Clermont-Ferrand. Éditeur, hébergeur, propriété intellectuelle et droit applicable.",
    images: [{ url: "https://xixouner.com/og-home.svg", width: 1200, height: 630 }],
  },
};

export default function MentionsLegales() {
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
                name: "Mentions légales",
                item: "https://xixouner.com/mentions-legales",
              },
            ],
          }),
        }}
      />
      <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-8 text-3xl font-bold text-primary">Mentions légales</h1>

      <section className="space-y-6 text-text-light">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Éditeur du site</h2>
          <p>Alexis Trechot — XixounerDev</p>
          <p>Entrepreneur individuel</p>
          <p>SIRET : 999 699 101 00013</p>
          <p>Clermont-Ferrand, France</p>
          <p>Email : alexistrechot@gmail.com</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Directeur de la publication</h2>
          <p>Alexis Trechot</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Hébergeur du site</h2>
          <p>Hetzner Online GmbH — Industriestr. 25, 91710 Gunzenhausen, Allemagne</p>
          <p>Téléphone : +49 9831 505-0 — www.hetzner.com</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Contact</h2>
          <p>Email : alexistrechot@gmail.com</p>
          <p>
            Pour toute question relative au site ou à une prestation, écrivez à
            cette adresse. Réponse sous 24 à 48 heures ouvrées.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Activité et statut fiscal</h2>
          <p>Activité : développement web et prestations informatiques.</p>
          <p>
            Entrepreneur individuel — TVA non applicable, article 293 B du Code
            général des impôts.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Conditions générales de vente</h2>
          <p>
            Les prestations sont régies par les{" "}
            <Link href="/cgv" className="underline underline-offset-4">
              conditions générales de vente
            </Link>
            . Elles sont réservées aux <strong>clients professionnels</strong> :
            XixounerDev ne traite pas de commandes de consommateurs.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Données personnelles et cookies</h2>
          <p>
            Les données transmises via le formulaire de contact sont utilisées
            uniquement pour répondre à la demande. Aucune donnée n&apos;est cédée à
            un tiers. Le détail des traitements, des durées de conservation et
            de vos droits figure dans la{" "}
            <Link
              href="/confidentialite"
              className="text-accent underline underline-offset-2 hover:text-accent-light"
            >
              politique de confidentialité
            </Link>
            .
          </p>
          <p>
            Ce site n&apos;utilise pas de cookie publicitaire ni de traceur tiers.
            La mesure d&apos;audience est anonymisée et ne permet pas
            d&apos;identifier un visiteur.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments de ce site (textes, code source, design)
            est la propriété exclusive d&apos;Alexis Trechot. Toute reproduction,
            modification ou exploitation sans autorisation écrite est
            interdite.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Droit applicable</h2>
          <p>
            Le présent site et ses conditions d&apos;utilisation sont soumis au
            droit français. En cas de litige et à défaut de résolution amiable,
            les tribunaux français sont seuls compétents.
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



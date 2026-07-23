import Link from "next/link";

export const metadata = {
  title: "Mentions légales | XixounerDev",
  description: "Mentions légales du site XixounerDev — Alexis Trechot, entrepreneur individuel.",
};

export default function MentionsLegales() {
  return (
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
          <h2 className="mb-2 text-lg font-semibold text-primary">Hébergement</h2>
          <p>Hetzner Online GmbH</p>
          <p>Industriestr. 25, 91710 Gunzenhausen, Allemagne</p>
          <p>Site web : www.hetzner.com</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments de ce site (textes, code source, design) est la propriété exclusive d&apos;Alexis Trechot.
            Toute reproduction, modification ou exploitation sans autorisation est interdite.
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
  );
}

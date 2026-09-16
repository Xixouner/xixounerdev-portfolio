import type { Metadata } from "next";
import { Hero } from "~/components/hero";
import { Difference } from "~/components/difference";
import { Portfolio } from "~/components/portfolio";
import { Services } from "~/components/services";
import { ContactForm } from "~/components/contact-form";

// La home est la seule route qui n'avait AUCUN canonical (le layout le
// retire volontairement pour ne pas le forcer partout). Une home sans
// canonical, c'est une home qui peut être indexée en double via
// /index.html, /?utm_source=... etc. META-008.
export const metadata: Metadata = {
  alternates: { canonical: "https://xixouner.com" },
};

export default function Home() {
  return (
    <main>
      {/* FAQPage JSON-LD : UNIQUEMENT sur la home, là où la FAQ est visible.
          (Avant : dans le layout -> déclaré sur les 35 pages, mensonger pour Google.) */}
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

      <Hero />
      <Difference />
      <Portfolio />
      <Services />
      <ContactForm />

        {/* FAQ visible — rich snippets Google */}
        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {[
                { q: "Quels sont vos tarifs pour la création d'un site web ?", a: "Mes créations de sites web sur-mesure démarrent à partir de 500 € HT. Le prix exact dépend de vos besoins (nombre de pages, fonctionnalités, design) et fait l'objet d'un devis détaillé gratuit après échange. Pas de frais cachés, pas d'abonnement obligatoire." },
                { q: "Quel est le délai pour créer un site internet ?", a: "Je réponds à votre demande sous 24h. Le délai de réalisation dépend de la complexité : de quelques jours pour un site vitrine simple à 2-3 semaines pour un projet plus ambitieux. Vous avez accès à une version preview pour suivre l'avancement." },
                { q: "Proposez-vous l'hébergement du site ?", a: "Oui, je gère l'intégralité de l'hébergement sur des serveurs professionnels Hetzner (Allemagne, RGPD). Docker, certificats SSL automatiques, sauvegardes quotidiennes, monitoring 24/7. À partir de 5 € par mois." },
                { q: "Où êtes-vous basé ?", a: "Je suis développeur freelance à Clermont-Ferrand et je travaille avec des clients partout en France. TPE, PME, associations, startups — on peut échanger par téléphone, visio, ou autour d'un café si vous êtes dans le Puy-de-Dôme." },
                { q: "Pourquoi vos prix sont-ils plus bas que ceux d'une agence ?", a: "Je suis seul. Pas de locaux, pas de commerciaux, pas de marge sur des prestataires. 100% de ce que vous payez va dans le développement. Et ma stack technique (Next.js, Docker) est bien plus efficace que WordPress pour les sites vitrine." },
                { q: "Est-ce que je pourrai modifier le contenu moi-même ?", a: "Oui. Je vous forme en 30 minutes pour les modifications simples (textes, images). Pour le reste, je reste disponible. Contrairement à WordPress, vous n'aurez pas 15 plugins à maintenir." },
              ].map((faq, i) => (
                <details key={i} className="group rounded-xl border border-border bg-white">
                  <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-primary transition-colors hover:text-accent">
                    {faq.q}
                  </summary>
                  <p className="px-6 pb-4 text-text-light">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}

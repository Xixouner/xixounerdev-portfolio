import { Hero } from "~/components/hero";
import { Difference } from "~/components/difference";
import { Portfolio } from "~/components/portfolio";
import { Services } from "~/components/services";
import { ContactForm } from "~/components/contact-form";

export default function Home() {
  return (
    <main>
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

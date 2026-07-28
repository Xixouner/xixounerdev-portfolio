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
    </main>
  );
}

import { Header } from "~/components/header";
import { Hero } from "~/components/hero";
import { Difference } from "~/components/difference";
import { Portfolio } from "~/components/portfolio";
import { Services } from "~/components/services";
import { ContactForm } from "~/components/contact-form";
import { Footer } from "~/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Difference />
        <Portfolio />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

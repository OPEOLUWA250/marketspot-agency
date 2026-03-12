import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Portfolio } from "@/components/portfolio";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />

      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <CTA />

      <Footer />
    </main>
  );
}

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ApplySection } from "@/components/sections/ApplySection";
import { WhoFor } from "@/components/sections/WhoFor";
import { OfferOverview } from "@/components/sections/OfferOverview";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FaqSection } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <ApplySection />
        <Reveal>
          <OfferOverview />
        </Reveal>
        <Reveal>
          <CaseStudies />
        </Reveal>
        <Reveal>
          <WhoFor />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

import { Nav } from "@/components/apparatus/Nav";
import { Hero } from "@/components/apparatus/Hero";
import { ProofStrip } from "@/components/apparatus/ProofStrip";
import { Process } from "@/components/apparatus/Process";
import { Pipe } from "@/components/apparatus/Pipe";
import { Results } from "@/components/apparatus/Results";
import { Testimonials } from "@/components/apparatus/Testimonials";
import { CaseStudies } from "@/components/apparatus/CaseStudies";
import { ApplySection } from "@/components/apparatus/ApplySection";
import { Faq } from "@/components/apparatus/Faq";
import { ClosingCta } from "@/components/apparatus/ClosingCta";
import { SiteFooter } from "@/components/apparatus/SiteFooter";

export default function Home() {
  return (
    <div className="apparatus min-h-screen w-full overflow-x-clip">
      <Nav />
      <main>
        {/* One apparatus: the pipe overlay spans flask → process → results rack. */}
        <div className="relative">
          <Pipe />
          <Hero />
          <ProofStrip />
          <Process />
          <Results />
        </div>
        <Testimonials />
        <CaseStudies />
        <ApplySection />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}

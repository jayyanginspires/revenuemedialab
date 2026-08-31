import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon } from "@/components/Icons";
import { CASE_STUDIES } from "@/lib/content";

export function CaseStudies() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="h2-display text-center text-foreground">Case studies</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.person} delay={i * 120}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-pale shadow-[0_1px_0_rgba(21,19,14,0.04),0_12px_24px_-18px_rgba(21,19,14,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_36px_-18px_rgba(21,19,14,0.3)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.image.src}
                  alt={study.image.alt}
                  className="h-56 w-full object-cover object-top sm:h-64"
                />

                <div className="flex flex-1 flex-col p-5">
                  <span className="eyebrow text-accent-dark">
                    {study.person} · {study.brand}
                  </span>
                  <h3 className="mt-1.5 text-lg font-extrabold leading-snug tracking-tight text-foreground">
                    {study.headline}
                  </h3>

                  <span className="eyebrow mt-4 inline-flex items-center gap-1.5 text-accent-dark">
                    Read the case study
                    <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { LinkButton } from "@/components/Button";
import { ArrowUpRightIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { PhaseBadge } from "@/components/sections/PhaseBadge";
import { OFFER_PHASES, OFFER_SUMMARY, SITE } from "@/lib/content";

export function OfferOverview() {
  return (
    <section className="border-t border-t-accent border-b border-b-border bg-background-pale">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="h2-display text-foreground">
            We scale your business with revenue-driving media systems
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            More reach. Better leads. Less headache. All within {OFFER_SUMMARY.duration}.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div
            aria-hidden="true"
            className="absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-accent to-accent-dark"
          />
          <ol className="space-y-10">
            {OFFER_PHASES.map((phase, i) => (
              <li key={phase.number}>
                <Reveal delay={i * 120}>
                  <div className="group flex gap-6">
                    <PhaseBadge number={phase.number} />
                    <div className="flex-1 rounded-2xl border border-border bg-white p-6 shadow-[0_1px_0_rgba(21,19,14,0.04),0_16px_32px_-20px_rgba(21,19,14,0.25)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-[0_24px_40px_-20px_rgba(21,19,14,0.3)]">
                      <span className="eyebrow text-accent-dark">Phase {phase.number}</span>
                      <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                        {phase.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted">{phase.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex justify-center">
          <LinkButton href="/#apply">
            {SITE.qualifyCta}
            <ArrowUpRightIcon className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

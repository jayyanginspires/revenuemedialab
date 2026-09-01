import { LinkButton } from "@/components/Button";
import { ArrowUpRightIcon } from "@/components/Icons";
import { HERO, SITE } from "@/lib/content";

const BOLD_PHRASE = "Revenue Media Systems";

function Subheadline({ text }: { text: string }) {
  const i = text.indexOf(BOLD_PHRASE);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-bold text-foreground">{BOLD_PHRASE}</strong>
      {text.slice(i + BOLD_PHRASE.length)}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-[-120px] top-[120px] h-[320px] w-[420px] rounded-full bg-accent-dark/10 blur-3xl" />
      </div>
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-16 text-center md:pb-20 md:pt-20">
        <span className="eyebrow mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-paper px-4 py-2 text-muted shadow-sm">
          <span className="relative h-1.5 w-1.5 rounded-full bg-accent">
            <span className="absolute inset-[-4px] rounded-full border border-accent/50" />
          </span>
          {HERO.badge}
        </span>

        <h1 className="hero-headline text-foreground">
          {HERO.eyebrowScript}
          <br />
          {HERO.headlineTop}
          <br />
          <span className="hero-script-accent -rotate-1 text-accent">{HERO.headlineAccent}</span>
        </h1>

        <div className="font-mono mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-paper px-7 py-6 text-[14px] leading-relaxed text-muted shadow-[0_1px_0_rgba(18,24,26,0.04),0_12px_28px_-14px_rgba(18,24,26,0.15)]">
          <Subheadline text={HERO.subheadline} />
        </div>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <LinkButton href="/#apply" className="!px-10 !py-5 !text-lg">
            {SITE.qualifyCta}
            <ArrowUpRightIcon className="h-5 w-5" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

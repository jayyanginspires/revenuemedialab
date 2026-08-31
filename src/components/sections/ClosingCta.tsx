import { LinkButton } from "@/components/Button";
import { ArrowUpRightIcon } from "@/components/Icons";
import { CLOSING_CTA, SITE } from "@/lib/content";

const ACCENT_WORD = "organically";

function AccentLine({ text }: { text: string }) {
  const i = text.toLowerCase().indexOf(ACCENT_WORD);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="text-accent">{text.slice(i, i + ACCENT_WORD.length)}</span>
      {text.slice(i + ACCENT_WORD.length)}
    </>
  );
}

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-dark-bg py-24 text-center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-24 top-[-80px] h-[320px] w-[420px] rounded-full bg-accent-dark/25 blur-3xl" />
        <div className="absolute -right-16 bottom-[-100px] h-[360px] w-[440px] rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-2xl px-6">
        <h2 className="h2-display text-dark-ink">
          {CLOSING_CTA.headline}
          <br />
          <AccentLine text={CLOSING_CTA.subheadline} />
        </h2>
        <div className="mt-9 flex justify-center">
          <LinkButton href="/#apply">
            {SITE.qualifyCta}
            <ArrowUpRightIcon className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

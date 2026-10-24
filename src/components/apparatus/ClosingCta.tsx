import { CLOSING, QUALIFY_CTA } from "@/lib/apparatus";

export function ClosingCta() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 pb-20 sm:px-6 md:pb-[104px]">
      <div className="flex flex-col items-start gap-8 rounded-[48px] border-[3px] border-ink bg-solution px-7 py-12 shadow-[0_10px_0_var(--ink)] md:flex-row md:items-center md:justify-between md:px-16 md:py-20">
        <h2 className="display-h2 m-0 max-w-[820px] text-white">{CLOSING.headline}</h2>
        <a
          href="#apply"
          className="btn-primary shrink-0 !bg-glass !text-ink hover:!bg-glass-tint"
        >
          {QUALIFY_CTA}
        </a>
      </div>
    </section>
  );
}

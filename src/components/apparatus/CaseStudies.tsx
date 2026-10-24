import { CASE_STUDIES, CASE_STUDIES_SECTION } from "@/lib/apparatus";
import { PlatformLogo } from "./PlatformLogo";

// Compact cards: which channel and client, the hook, the numbers that
// moved, and a link to the client's case study page.
export function CaseStudies() {
  return (
    <section id="reports" className="mx-auto max-w-[1320px] scroll-mt-6 px-4 pb-20 pt-2 sm:px-6 md:pb-[104px] md:pt-4">
      {/* Invitation header: sentence case, pointing at the cards' links. */}
      <div className="mx-auto mb-10 flex max-w-[960px] flex-wrap items-end gap-x-6 gap-y-2">
        <h2 className="m-0 max-w-[680px] text-[30px] font-bold leading-[1.15] text-ink md:text-[38px]">
          {CASE_STUDIES_SECTION.headline}
        </h2>
        <p className="margin-note m-0 mb-3 flex -rotate-3 items-end gap-1 text-[26px]">
          {CASE_STUDIES_SECTION.note}
          {/* Hand-drawn arrow curling down toward the cards, in the note's ink. */}
          <svg aria-hidden="true" viewBox="0 0 40 48" className="mb-[-18px] h-[44px] w-[36px] rotate-3" fill="none">
            <path
              d="M6 6c14-2 26 4 25 16-1 8-5 14-11 20"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path d="M29 40l-9 2 2-9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </p>
      </div>

      <div className="mx-auto grid max-w-[960px] gap-6 md:grid-cols-2">
        {CASE_STUDIES.map((c) => (
          // id is the scroll target for the results rack; .case-card flashes
          // its shadow green when a tube links here. On two columns each card is
          // a subgrid over 4 shared rows, so cards side by side line up their
          // headlines, number tiles and links even when the hooks differ in length.
          <article
            key={c.id}
            id={c.id}
            className="case-card flex scroll-mt-24 flex-col gap-4 rounded-[28px] border-2 border-ink bg-glass p-5 md:row-span-4 md:grid md:grid-rows-subgrid md:p-6"
          >
            <p className="m-0 flex items-center gap-2.5 text-[15px]">
              <PlatformLogo platform={c.channel} size="28px" />
              <span>
                <strong>{c.channel === "x" ? "X" : "LinkedIn"}</strong>
                <span className="text-muted"> · {c.client}</span>
              </span>
            </p>
            <h3 className="m-0 text-[20px] font-bold leading-[1.25] md:text-[21px]">{c.headline}</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {c.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-1 rounded-[18px] bg-glass-tint px-3.5 py-3">
                  <span
                    className={`whitespace-nowrap font-display leading-none text-solution-dark ${
                      m.value.length > 6 ? "text-[22px]" : "text-[28px]"
                    }`}
                  >
                    {m.value}
                  </span>
                  <span className="min-h-[2lh] text-[13px] leading-snug text-ink-soft">{m.label}</span>
                </div>
              ))}
            </div>
            <a
              href={c.href}
              className="mt-auto self-start text-[15px] font-bold text-solution-dark underline underline-offset-4"
            >
              Read the case study
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

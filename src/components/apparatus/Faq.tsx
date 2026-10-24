"use client";

import { useId, useState } from "react";
import { FAQ, FAQ_HEADLINE } from "@/lib/apparatus";

// One open at a time. Native <button>s give Enter/Space; panels are
// regions labelled by their question.
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="faq" className="mx-auto max-w-[1000px] scroll-mt-6 px-4 pb-20 sm:px-6 md:pb-[104px]">
      <h2 className="m-0 mb-8 text-[30px] font-bold leading-[1.15] text-ink md:text-[38px]">{FAQ_HEADLINE}</h2>
      <div className="flex flex-col gap-3.5">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          const btnId = `${base}-q${i}`;
          const panelId = `${base}-a${i}`;
          return (
            <div key={item.q} className="rounded-[28px] border-2 border-ink bg-glass">
              <h3 className="m-0">
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-16 w-full items-center justify-between gap-4 rounded-[26px] px-6 py-4 text-left text-[19px] font-bold leading-snug"
                >
                  {item.q}
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink transition-colors ${
                      isOpen ? "bg-glass-tint" : "bg-glass"
                    }`}
                  >
                    <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                      <path d="M6 1v10M1 6h10" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
                <p className="m-0 max-w-[70ch] px-6 pb-6 text-[18px] leading-[1.55] text-ink-soft">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

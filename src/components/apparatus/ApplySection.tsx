import { APPLY } from "@/lib/apparatus";
import { ApplyForm } from "./ApplyForm";

// The application, embedded on the homepage right after the case studies.
// One black card: the pitch on the left, the white form on the right.
export function ApplySection() {
  return (
    <section id="apply" className="mx-auto max-w-[1320px] scroll-mt-6 px-4 pb-20 sm:px-6 md:pb-[104px]">
      <div className="grid gap-10 rounded-[48px] bg-ink px-5 py-10 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] lg:gap-14 lg:px-16 lg:py-16">
        <div className="flex flex-col gap-5 lg:self-start">
          <h2 className="display-h2 m-0 text-white">
            {APPLY.headline}<span className="mt-2 block">{APPLY.cta}</span>
          </h2>
          <p className="m-0 max-w-[460px] text-[19px] leading-[1.55] text-white/80">{APPLY.body}</p>
          <p
            className="margin-note m-0 flex -rotate-3 items-end gap-1.5 self-start text-[26px]"
            style={{ color: "var(--raw)" }}
          >
            <span className="whitespace-nowrap">{APPLY.note}</span>
            {/* Hand-drawn arrows toward the form, starting at the last word: a curl down
                to the form below on phones, a swoop right to the form beside it on desktop. */}
            <svg aria-hidden="true" viewBox="0 0 32 40" className="h-[40px] w-[32px] shrink-0 translate-y-[34px] lg:hidden" fill="none">
              <path d="M2 4C16 2 26 10 24 22C23 28 20 32 16 36" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M23.7 33.9L16 36l2.1-7.7z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 84 28" className="hidden h-[28px] w-[84px] shrink-0 translate-y-[10px] lg:block" fill="none">
              <path d="M2 18C20 26 50 22 78 5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M70 4.5L81 3l-6 9.5z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </p>
        </div>
        <div className="rounded-[28px] bg-glass p-5 text-ink sm:p-8">
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}

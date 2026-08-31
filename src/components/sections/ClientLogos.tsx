import { CLIENT_LOGOS } from "@/lib/content";

// Every client renders the same way: profile photo, name, brand. Earlier this
// file carried a bespoke mark per brand — a recreated wordmark, a logo file,
// a photo — which meant four different optical weights that no amount of
// alignment made look like a set.
export function ClientLogos() {
  return (
    <section className="relative overflow-hidden bg-background-pale py-10 md:py-14">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-center text-lg font-semibold text-muted md:whitespace-nowrap md:text-xl">
          Worked with the biggest names in the game...
        </p>

        <div className="mt-8 flex flex-wrap items-stretch justify-center gap-4 sm:gap-5">
          {CLIENT_LOGOS.map((c) => (
            <div
              key={c.person}
              className="group flex w-[calc(50%-0.5rem)] max-w-[260px] flex-col items-center justify-center gap-3 rounded-xl border border-border bg-white px-5 py-7 shadow-[0_1px_0_rgba(18,24,26,0.03),0_16px_28px_-20px_rgba(18,24,26,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 sm:w-[210px] md:w-[230px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.photo}
                alt={c.person}
                width={400}
                height={400}
                loading="lazy"
                className="h-20 w-20 rounded-full object-cover md:h-[88px] md:w-[88px]"
              />
              <span className="flex flex-col items-center gap-1 text-center">
                <span className="text-sm font-extrabold uppercase leading-tight tracking-wide text-foreground md:text-base">
                  {c.person}
                </span>
                <span className="eyebrow text-xs text-muted">{c.brand}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

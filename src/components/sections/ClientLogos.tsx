import { CLIENT_LOGOS } from "@/lib/content";

// For brands whose mark already spells out the person's name (Noah Kagan),
// the caption underneath shows the brand instead — otherwise it'd just
// repeat the name shown right above it.
const PERSON_IS_THE_MARK: ReadonlySet<(typeof CLIENT_LOGOS)[number]["brand"]> = new Set([
  "AppSumo",
]);

// Each of the three brands gets its own bespoke mark rather than a generic
// logo slot: a real logo file where the brand has one (Acquisition.com), a
// recreation of their actual wordmark where the "logo" is really just
// distinctive typography (She Sells), and a profile photo where the person
// *is* the brand (Noah Kagan) — matching how each of these actually
// presents itself on its own site.
function LogoMark({ brand }: { brand: (typeof CLIENT_LOGOS)[number]["brand"] }) {
  switch (brand) {
    case "She Sells":
      return (
        <span
          className="text-2xl italic text-foreground md:text-3xl"
          style={{ fontFamily: "Georgia, 'Playfair Display', serif", fontWeight: 700 }}
        >
          she sells
        </span>
      );
    case "Acquisition.com":
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/logos/acquisition-com.png"
          alt="Acquisition.com"
          width={439}
          height={41}
          className="h-7 w-auto object-contain invert md:h-8"
        />
      );
    case "AppSumo":
      return (
        <span className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/noah-kagan.jpg"
            alt="Noah Kagan"
            width={200}
            height={200}
            className="h-11 w-11 shrink-0 rounded-full object-cover md:h-12 md:w-12"
          />
          <span className="text-left text-sm font-extrabold uppercase leading-tight tracking-wide text-foreground md:text-base">
            Noah
            <br />
            Kagan
          </span>
        </span>
      );
  }
}

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
              className="group flex w-full max-w-[300px] shrink-0 flex-col items-center justify-center gap-3 rounded-xl sm:w-[230px] md:w-[250px] min-h-[160px] border border-border bg-white px-6 py-8 shadow-[0_1px_0_rgba(18,24,26,0.03),0_16px_28px_-20px_rgba(18,24,26,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 md:min-h-[190px]"
            >
              <span className="flex h-14 items-center justify-center md:h-16">
                <LogoMark brand={c.brand} />
              </span>
              <span className="eyebrow flex min-h-9 flex-col items-center justify-start text-center text-xs leading-tight text-muted">
                {PERSON_IS_THE_MARK.has(c.brand) ? c.brand : c.person}
                {"secondPerson" in c && c.secondPerson ? (
                  <>
                    <br />
                    {c.secondPerson}
                  </>
                ) : null}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

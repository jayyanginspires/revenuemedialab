import { CheckIcon, XIcon } from "@/components/Icons";
import { WHO_FOR } from "@/lib/content";

export function WhoFor() {
  return (
    <section className="bg-background-pale">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="h2-display text-center text-foreground">Who this is for</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8">
            <h3 className="text-lg font-bold text-foreground">This is for you if:</h3>
            <ul className="mt-4 space-y-3">
              {WHO_FOR.isFor.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8">
            <h3 className="text-lg font-bold text-foreground">This isn&apos;t for you if:</h3>
            <ul className="mt-4 space-y-3">
              {WHO_FOR.isNotFor.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted">
                  <XIcon className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

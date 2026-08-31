import { FAQ } from "@/lib/content";

export function FaqSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="h2-display text-center text-foreground">Common questions</h2>
        <div className="mt-10 divide-y divide-border">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-foreground marker:content-none">
                {item.q}
                <span aria-hidden="true" className="shrink-0 text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ReactNode } from "react";
import Link from "next/link";
import { LinkButton } from "@/components/Button";
import { ArrowUpRightIcon } from "@/components/Icons";
import { SITE } from "@/lib/content";

type Stat = { value: string; label: string };

export function CaseStudyHero({
  headline,
  dek,
  stats,
  image,
  eyebrow = "Case study",
}: {
  headline: string;
  dek: ReactNode;
  stats: Stat[];
  image?: { src: string; alt: string; caption: string };
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-background-pale">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6 pb-14 pt-14 text-center md:pt-20">
        <p className="text-muted">{eyebrow}</p>
        <h1 className="h1-display mt-4 text-foreground">{headline}</h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">{dek}</p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-y-6 border-y border-border py-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="h3-display text-accent">{stat.value}</div>
              <div className="eyebrow mt-1 text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {image && (
        <div className="relative mx-auto max-w-3xl px-6 pb-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full rounded-2xl border border-border object-cover shadow-[0_1px_0_rgba(18,24,26,0.04),0_20px_40px_-24px_rgba(18,24,26,0.3)]"
          />
          <p className="mt-3 text-center text-sm text-muted">{image.caption}</p>
        </div>
      )}
    </section>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-l-4 border-accent bg-background-pale px-5 py-4 leading-relaxed text-foreground">
      {children}
    </div>
  );
}

export function ArticleH2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="h3-display mt-10 scroll-mt-24 text-foreground">
      {children}
    </h2>
  );
}

// Jump links for long reads. Anchors must match the ids passed to ArticleH2.
export function TableOfContents({
  items,
  minutes,
}: {
  items: { id: string; label: string }[];
  minutes: number;
}) {
  return (
    <nav
      aria-label="Contents"
      className="my-8 rounded-xl border border-border bg-background-pale p-6"
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="eyebrow text-accent-dark">Contents</p>
        <p className="text-sm text-muted">{minutes} min read</p>
      </div>
      <ol className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-3 text-[15px] leading-snug">
            <span className="w-5 shrink-0 tabular-nums text-muted">{i + 1}.</span>
            <a
              href={`#${item.id}`}
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// The actionable prompts in the essay, set apart from quoted material.
export function TryThis({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-accent/30 bg-white p-5">
      <p className="eyebrow mb-2 text-accent-dark">Try this</p>
      <div className="leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

export function ArticleH3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 text-lg font-bold text-foreground">{children}</h3>;
}

export function CaseStudyClosing({ prompt }: { prompt: string }) {
  return (
    <div className="mt-14 border-t border-border pt-10 text-center">
      <p className="mx-auto max-w-sm leading-relaxed text-muted">{prompt}</p>
      <div className="mt-6 flex justify-center">
        <LinkButton href="/#apply">
          {SITE.qualifyCta}
          <ArrowUpRightIcon className="h-4 w-4" />
        </LinkButton>
      </div>
      <Link href="/" className="eyebrow mt-8 inline-block text-muted hover:text-accent">
        ← Back to home
      </Link>
    </div>
  );
}

export function CaseStudyArticle({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16 leading-relaxed text-foreground [&_p]:mt-5 [&_p:first-child]:mt-0 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5">
      {children}
    </article>
  );
}

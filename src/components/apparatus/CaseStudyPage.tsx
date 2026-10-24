import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CASE_STUDIES, QUALIFY_CTA } from "@/lib/apparatus";
import { Nav } from "./Nav";
import { PlatformLogo } from "./PlatformLogo";
import { SiteFooter } from "./SiteFooter";

// Shared layout for /case-studies/*: the same channel label and key numbers
// as the homepage card, the full write-up from the client's PDF, a closing
// CTA back to /apply, and links to the other case studies.

type Props = {
  id: string; // matches CASE_STUDIES[].id
  title: string;
  subtitle?: string;
  dek: ReactNode;
  stats: { value: string; label: string }[];
  cta: { headline: string; body: string };
  children: ReactNode;
};

export function CaseStudyPage({ id, title, subtitle, dek, stats, cta, children }: Props) {
  const card = CASE_STUDIES.find((c) => c.id === id)!;
  const others = CASE_STUDIES.filter((c) => c.id !== id);
  return (
    <div className="apparatus flex min-h-screen flex-col">
      <Nav linkBase="/" />
      <main className="flex-1">
        <header className="mx-auto max-w-[880px] px-4 pb-10 pt-6 sm:px-6 md:pt-10">
          <Link href="/#reports" className="text-[15px] font-bold text-solution-dark underline underline-offset-4">
            All case studies
          </Link>
          <p className="m-0 mt-8 flex items-center gap-2.5 text-[16px]">
            <PlatformLogo platform={card.channel} size="30px" />
            <span>
              <strong>{card.channel === "x" ? "X" : "LinkedIn"}</strong>
              <span className="text-muted"> · {card.client}</span>
            </span>
          </p>
          <h1 className="display-h2 m-0 mt-5">{title}</h1>
          {subtitle && <p className="m-0 mt-5 text-[22px] font-bold leading-snug md:text-[24px]">{subtitle}</p>}
          <div className="mt-4 text-[19px] leading-[1.55] text-ink-soft">{dek}</div>
          <dl className="m-0 mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end gap-1.5 rounded-[22px] border-2 border-ink bg-glass p-4">
                <dt className="text-[14px] leading-snug text-ink-soft">{s.label}</dt>
                <dd className="m-0 font-display text-[30px] leading-none text-solution-dark md:text-[34px]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <article className="case-prose mx-auto max-w-[760px] px-4 pb-16 sm:px-6">{children}</article>

        <section className="mx-auto max-w-[1100px] px-4 pb-16 sm:px-6">
          <div className="flex flex-col items-start gap-6 rounded-[48px] border-[3px] border-ink bg-solution px-7 py-12 shadow-[0_10px_0_var(--ink)] md:px-14 md:py-16">
            <h2 className="display-h2 m-0 max-w-[820px] text-white">{cta.headline}</h2>
            <p className="m-0 max-w-[620px] text-[19px] leading-[1.55] text-white">{cta.body}</p>
            <Link href="/#apply" className="btn-primary !bg-glass !text-ink hover:!bg-glass-tint">
              {QUALIFY_CTA}
            </Link>
          </div>
        </section>

        <section aria-labelledby="more-results" className="mx-auto max-w-[1100px] px-4 pb-20 sm:px-6">
          <h2 id="more-results" className="m-0 mb-6 text-[24px] font-bold">
            Read another case study
          </h2>
          <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
            {others.map((c) => (
              <li key={c.id}>
                <Link
                  href={c.href}
                  className="flex h-full flex-col gap-3 rounded-[24px] border-2 border-ink bg-glass p-5 shadow-[0_5px_0_var(--ink)] transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-2 text-[14px]">
                    <PlatformLogo platform={c.channel} size="22px" />
                    <span className="text-muted">{c.client}</span>
                  </span>
                  <span className="text-[17px] font-bold leading-snug text-ink">{c.headline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

// ── Body building blocks ───────────────────────────────────────────────

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function Step({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function Figure({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-[22px] border-2 border-ink bg-white shadow-[0_6px_0_var(--ink)]">
        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 800px) 712px, 100vw" className="block h-auto w-full" />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="case-table">
      <table>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, k) => (
                <td key={k}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return <blockquote>{children}</blockquote>;
}

export function Applied({ children }: { children: ReactNode }) {
  return (
    <p>
      <strong>How we applied it:</strong> {children}
    </p>
  );
}

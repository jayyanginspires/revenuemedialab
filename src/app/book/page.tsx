import type { Metadata } from "next";
import { Nav } from "@/components/apparatus/Nav";
import { SiteFooter } from "@/components/apparatus/SiteFooter";
import { BookingEmbed } from "@/components/apparatus/BookingEmbed";
import { BOOK } from "@/lib/apparatus";

export const metadata: Metadata = {
  title: "Pick a time | Revenue Media Lab",
  description: "Book a 30-minute call with the Revenue Media Lab team.",
  robots: { index: false },
};

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

export default async function BookPage({ searchParams }: PageProps<"/book">) {
  const q = await searchParams;
  return (
    <div className="apparatus flex min-h-screen flex-col">
      <Nav minimal />
      <main className="mx-auto w-full max-w-[1100px] flex-1 px-4 pb-20 pt-6 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-start">
          <div className="flex flex-col gap-5 lg:sticky lg:top-8">
            <h1 className="display-h2 m-0">{BOOK.headline}</h1>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {BOOK.lines.map((line) => (
                <li key={line} className="text-[19px] leading-[1.5] text-ink-soft">
                  {line}
                </li>
              ))}
            </ul>
            <p className="m-0 text-[13px] text-muted">{BOOK.confirm}</p>
          </div>
          <div className="overflow-hidden rounded-[32px] border-2 border-ink bg-glass shadow-[0_8px_0_var(--ink)]">
            <BookingEmbed
              calendlyUrl={BOOK.calendlyUrl}
              name={first(q.name)}
              email={first(q.email)}
              phone={first(q.phone)}
              leadId={first(q.lead_id)}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

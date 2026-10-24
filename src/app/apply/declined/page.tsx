import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/apparatus/Nav";
import { SiteFooter } from "@/components/apparatus/SiteFooter";
import { DECLINED } from "@/lib/apparatus";

export const metadata: Metadata = {
  title: "Thanks for applying | Revenue Media Lab",
  description: "We've received your application.",
  robots: { index: false },
};

export default function DeclinedPage() {
  return (
    <div className="apparatus flex min-h-screen flex-col">
      <Nav minimal />
      <main className="mx-auto w-full max-w-[760px] flex-1 px-4 pb-20 pt-6 sm:px-6">
        <div className="flex flex-col gap-6 rounded-[32px] border-2 border-ink bg-glass p-6 shadow-[0_8px_0_var(--ink)] md:p-10">
          <h1 className="display-h2 m-0">{DECLINED.headline}</h1>
          <p className="m-0 text-[19px] leading-[1.55] text-ink-soft">{DECLINED.body}</p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {DECLINED.resources.map((r) => (
              <li key={r.href}>
                <a href={r.href} className="text-[17px] font-bold text-solution-dark underline underline-offset-4">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-text !px-0">
              Back to the homepage
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

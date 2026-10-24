import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/apparatus/Nav";
import { SiteFooter } from "@/components/apparatus/SiteFooter";
import { RmlMark } from "@/components/apparatus/RmlLogo";
import { ThankYouTracker } from "@/components/ThankYouTracker";
import { THANK_YOU } from "@/lib/apparatus";

export const metadata: Metadata = {
  title: "Your call is confirmed | Revenue Media Lab",
  description: "Your call is confirmed. Here's what happens next.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <div className="apparatus flex min-h-screen flex-col">
      <ThankYouTracker />
      <Nav minimal />
      <main className="mx-auto w-full max-w-[760px] flex-1 px-4 pb-20 pt-6 sm:px-6">
        <div className="flex flex-col gap-8 rounded-[32px] border-2 border-ink bg-glass p-6 shadow-[0_8px_0_var(--ink)] md:p-10">
          <RmlMark className="fill-once h-16 w-auto self-start" />
          <h1 className="display-h2 m-0">{THANK_YOU.headline}</h1>
          <ol className="m-0 flex list-none flex-col gap-5 p-0">
            {THANK_YOU.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-glass-tint text-[16px] font-bold"
                >
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <strong className="text-[19px]">{s.title}</strong>
                  <span className="text-[18px] leading-[1.5] text-ink-soft">{s.body}</span>
                  {s.link && (
                    <Link
                      href={s.link.href}
                      className="mt-1 self-start text-[17px] font-bold text-solution-dark underline underline-offset-4"
                    >
                      {s.link.label}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <Link href="/" className="btn-text self-start !px-0">
            Back to the homepage
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/Button";
import { ArrowUpRightIcon } from "@/components/Icons";
import { SITE } from "@/lib/content";

// The workbook is delivered by the beehiiv automation, not from this page.
// Sending people to their inbox means the delivery email actually gets opened,
// which is where the rest of the follow-up lives.

export const metadata: Metadata = {
  title: `Check your email — ${SITE.name}`,
  description: "Your marketing workbook is on its way.",
  robots: { index: false, follow: false },
};

export default function WorkbookThankYou() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="relative overflow-hidden bg-background-pale">
          <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-2xl px-6 pb-16 pt-16 text-center md:pt-20">
            <p className="text-muted">Success</p>
            <h1 className="h1-display mt-4 text-foreground">Check your email</h1>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
              Your workbook is on the way. It should land in the next minute or two, with a link to
              make your own copy.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
              Nothing there? Check promotions or spam, and add me to your contacts so the rest
              actually reaches you.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-16">
          <div className="rounded-2xl border border-border bg-background-pale p-7 text-center">
            <p className="eyebrow text-accent-dark">P.S.</p>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight text-foreground">
              Want us to run it for you?
            </h2>
            <p className="mx-auto mt-2 max-w-md leading-relaxed text-muted">
              If you&rsquo;d rather not build this yourself, you can book a call with our team. We
              install the same revenue media systems behind the brands you follow, for founder-led
              businesses doing $1&ndash;10M.
            </p>
            <div className="mt-6 flex justify-center">
              <LinkButton href="/#apply">
                {SITE.qualifyCta}
                <ArrowUpRightIcon className="h-4 w-4" />
              </LinkButton>
            </div>
          </div>

          <p className="mt-10 text-center">
            <Link href="/marketing" className="eyebrow text-muted hover:text-accent">
              ← Back to the essay
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

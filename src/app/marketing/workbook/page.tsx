import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/Button";
import { ArrowUpRightIcon } from "@/components/Icons";
import { SITE } from "@/lib/content";

// Swapping /edit for /copy forces Google's "Make a copy" dialog, so each
// reader gets their own editable copy and the master stays clean.
const WORKBOOK_COPY_URL =
  "https://docs.google.com/document/d/1GVBZsM-zqBBBe0m_NdypXdNNfZbEurb9Evy6ZQpSack/copy";

export const metadata: Metadata = {
  title: `Your workbook — ${SITE.name}`,
  description: "Your copy of the marketing workbook.",
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
            <p className="text-muted">Free workbook</p>
            <h1 className="h1-display mt-4 text-foreground">Here&rsquo;s your workbook</h1>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
              Click below and Google will make you your own copy. Fill it in as you work through
              the essay.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton href={WORKBOOK_COPY_URL}>
                Make my copy
                <ArrowUpRightIcon className="h-4 w-4" />
              </LinkButton>
            </div>
            <p className="mt-4 text-sm text-muted">
              Opens in Google Docs. You&rsquo;ll need to be signed in to a Google account.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-16">
          <h2 className="h3-display text-foreground">Start with these three</h2>
          <ol className="mt-5 space-y-3 leading-relaxed text-foreground [&>li]:list-decimal">
            <li className="ml-5">
              <strong>The triple test.</strong> If your leads tripled tomorrow, where would your
              business break? That answer usually decides what to fix first.
            </li>
            <li className="ml-5">
              <strong>The effort split.</strong> Put last month&rsquo;s marketing into current
              demand versus future demand. Most people are surprised.
            </li>
            <li className="ml-5">
              <strong>The empathy map.</strong> If you haven&rsquo;t transcribed a sales call,
              that&rsquo;s the highest-leverage hour of your week.
            </li>
          </ol>

          <div className="mt-12 rounded-2xl border border-border bg-background-pale p-7 text-center">
            <h2 className="text-xl font-extrabold tracking-tight text-foreground">
              Want us to build this with you?
            </h2>
            <p className="mx-auto mt-2 max-w-md leading-relaxed text-muted">
              We install the same revenue media systems behind the brands you follow. If
              you&rsquo;re a founder-led business doing $1&ndash;10M, see if it&rsquo;s a fit.
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

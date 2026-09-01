import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThankYouTracker } from "@/components/ThankYouTracker";
import { ArticleH2, CaseStudyArticle } from "@/components/CaseStudyLayout";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `You're Booked — ${SITE.name}`,
  description: "Your call is booked. Here's what happens next.",
};

const CALL_PREP_VIDEOS = [
  { id: "kstGHf469OU" },
  { id: "8GR5s7-N5xg" },
];

export default function ThankYouPage() {
  return (
    <>
      <ThankYouTracker />
      <Header showCta={false} />
      <main className="bg-white">
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-160px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute right-[-100px] top-[60px] h-[280px] w-[360px] rounded-full bg-accent-dark/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl px-6 pt-16 text-center md:pt-20">
            <h1 className="h1-display text-foreground">
              You&apos;re <span className="text-accent">booked</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
              A few things to know before our call that will help save us time:
            </p>
          </div>
        </section>

        <CaseStudyArticle className="mx-auto max-w-2xl px-6 pb-16 pt-6">
          <ArticleH2 className="mt-2">How we work</ArticleH2>
          <p>
            We&apos;ve built media systems for some of the best operators in the world. The
            standard is the same for everyone: we treat your brand like it&apos;s ours and go
            above and beyond to get it right. In return, we ask you to treat this process just as
            seriously.
          </p>
          <p>
            This is not a shallow &ldquo;discovery call.&rdquo; It&apos;s a working session to see
            if we should rebuild your media department and how fast we can make your content
            drive more revenue.
          </p>

          <ArticleH2>What happens next</ArticleH2>
          <ol>
            <li>
              As you read this, a calendar invite is on its way to your email. Open it and click
              &ldquo;Yes&rdquo; so it&apos;s on your calendar and you can join via Google Meet at
              the scheduled time.
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/calendar-invite-accept.png"
                alt="Gmail calendar invite for the call, with the Yes button highlighted."
                className="mt-4 w-full rounded-xl border border-border object-cover shadow-[0_1px_0_rgba(18,24,26,0.04),0_20px_40px_-24px_rgba(18,24,26,0.3)]"
              />
            </li>
            <li>
              Our head of sales and fulfillment operations, Xavier Richmond, will reach out by
              text and email before your call. If you don&apos;t respond, we&apos;ll assume
              priorities are misaligned and we&apos;ll cancel the call.
            </li>
            <li>
              Yes, we understand entrepreneur life is busy and things come up. If you need to
              reschedule, just give us a heads up.
            </li>
          </ol>

          <ArticleH2>How to get the most out of the call</ArticleH2>
          <ul>
            <li>
              Show up on time in a quiet place. Time is the most valuable resource. We want to use
              the 45 minutes we have together to focus fully on your business and get you the most
              value we can.
            </li>
            <li>
              Come prepared with numbers and context. The more of this you have ready, the more
              specific we can get:
              <ul>
                <li>Current and target monthly revenue</li>
                <li>Main avatar and offers</li>
                <li>Current content output and channels</li>
                <li>Team: who&apos;s involved today in content / media / sales</li>
                <li>Infrastructure, goals, and the bottlenecks you&apos;re running into</li>
              </ul>
            </li>
          </ul>
          <p>
            If you don&apos;t have everything perfectly documented, that&apos;s totally fine.
            We&apos;ll go through it together. But the founders who get the most out of this call
            come in ready.
          </p>

          <ArticleH2>What we&apos;ll cover on the call</ArticleH2>
          <p>In about 45 minutes, we&apos;ll:</p>
          <ul>
            <li>Run a quick audit of your current content and media setup</li>
            <li>Align on the highest leverage bottlenecks to solve</li>
            <li>
              Walk through what our 16-week revenue media install would look like for your
              business.
            </li>
            <li>Decide together if it makes sense to move forward or not.</li>
          </ul>
          <p>
            To preface — this isn&apos;t for everyone. There are a lot of businesses we
            won&apos;t be a good fit for, and that&apos;s okay. The goal of this call is clarity:
            either there&apos;s a clear economic case to transform your media department with us,
            or there isn&apos;t.
          </p>
          <p>Excited to connect soon.</p>
        </CaseStudyArticle>

        <CaseStudies heading="Some case studies to check out before our call:" />

        <div className="mx-auto max-w-4xl px-6 pb-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {CALL_PREP_VIDEOS.map((video, i) => (
              <div
                key={video.id}
                className="aspect-video overflow-hidden rounded-2xl border border-border"
              >
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`Call prep video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

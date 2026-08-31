import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThankYouTracker } from "@/components/ThankYouTracker";
import { CheckIcon } from "@/components/Icons";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `You're Booked — ${SITE.name}`,
  description: "Your call is booked. Here's what happens next.",
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYouTracker />
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-xl px-6 py-24 text-center">
          <h1 className="h2-display text-foreground">You&apos;re booked.</h1>
          <p className="mt-4 leading-relaxed text-muted">
            Your call is confirmed. Here&apos;s what happens between now and then:
          </p>
          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left text-muted">
            <li className="flex gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>You&apos;ll get a calendar invite by email with the call details.</span>
            </li>
            <li className="flex gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>
                You&apos;ll receive a short pre-call form so we can come prepared with your
                business in mind.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>No spam, no drip sequence — just what you need before the call.</span>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

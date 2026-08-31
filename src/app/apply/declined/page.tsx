import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Thanks for applying — ${SITE.name}`,
  description: "We've received your application.",
};

export default function DeclinedPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-xl px-6 py-20 text-center">
          <h1 className="h2-display text-foreground">Thanks for applying</h1>
          <p className="mt-4 leading-relaxed text-muted">
            Based on what you shared, the Revenue Media Engine isn&apos;t the right fit right
            now — it&apos;s built for businesses doing $10k+ in monthly revenue, where the
            attribution and team-install work has the room to pay for itself. That&apos;s not a
            reflection on where you&apos;re headed, just where the engagement makes sense today.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            If you&apos;d like to stay in the loop for when that changes — or for lower-ticket
            resources as they become available — leave your email below.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { LogoMark, Wordmark } from "@/components/Logo";
import { BOOKING, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Book Your Call — ${SITE.name}`,
  description: "Pick a time for your Revenue Media Engine strategy call.",
};

export default function BookPage() {
  return (
    <>
      <main className="bg-dark-bg">
        <div
          className="mx-auto flex max-w-2xl flex-col items-center px-6 pb-6 pt-14 text-center"
          style={
            {
              "--foreground": "var(--dark-ink)",
              "--color-foreground": "var(--color-dark-ink)",
            } as React.CSSProperties
          }
        >
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-6 w-auto" />
            <Wordmark className="text-[15px] sm:text-lg" />
          </div>
          <h1 className="h2-display mt-8 text-dark-ink">Step 2: Schedule Your Call</h1>
        </div>
        <div className="mx-auto max-w-3xl px-6 pb-20">
          <CalendlyEmbed calendlyUrl={BOOKING.calendlyUrl} />
        </div>
      </main>
      <Footer />
    </>
  );
}

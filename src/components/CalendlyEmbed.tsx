"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PlaceholderFlag } from "@/components/PlaceholderFlag";
import { withPersistedUtm } from "@/lib/utm";
import { isPlaceholder } from "@/lib/content";

export function CalendlyEmbed({ calendlyUrl }: { calendlyUrl: string }) {
  const router = useRouter();
  const configured = !isPlaceholder(calendlyUrl);

  useEffect(() => {
    if (!configured) return;

    function handleMessage(event: MessageEvent) {
      if (
        event.data?.event === "calendly.event_scheduled" &&
        typeof event.origin === "string" &&
        event.origin.includes("calendly.com")
      ) {
        router.push(withPersistedUtm("/book/thank-you"));
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [configured, router]);

  if (!configured) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-accent/40 bg-accent/5 p-10 text-center">
        <div className="flex justify-center">
          <PlaceholderFlag label="Calendly link not configured" />
        </div>
        <p className="mt-4 text-muted">
          Set <code className="rounded bg-white px-1.5 py-0.5 text-sm">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
          to your Calendly booking link to enable the embedded calendar.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <noscript>
        <p className="text-center text-muted">
          JavaScript is required to load the calendar.{" "}
          <a href={calendlyUrl} className="font-semibold text-accent underline">
            Open the booking page directly
          </a>
          .
        </p>
      </noscript>
    </>
  );
}

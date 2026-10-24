"use client";

import Script from "next/script";
import { preconnect } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { pushDataLayer } from "@/lib/dataLayer";
import { readClientUtmCookie } from "@/lib/utm";

type CalendlyApi = { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
type Props = { calendlyUrl: string; name: string; email: string; phone: string; leadId: string; visible?: boolean };

// How long a visible calendar gets to report in before we reload it once.
const STALL_MS = 6000;

// Inline Calendly, prefilled so the visitor never retypes. lead_id rides in
// Calendly's salesforce_uuid tracking field (it comes back on the booking
// webhook as tracking.salesforce_uuid) so the booking matches the CRM
// record created at /apply. Phone goes in a1, the event's first custom
// question. [[CONFIRM: phone is question 1 on the Calendly event]]
// `visible` is false while the calendar preloads off-screen during the
// application, so it's already loaded when the visitor qualifies.
export function BookingEmbed({ calendlyUrl, name, email, phone, leadId, visible = true }: Props) {
  const router = useRouter();
  preconnect("https://calendly.com");
  preconnect("https://assets.calendly.com");

  const host = useRef<HTMLDivElement>(null);
  // Set once the Calendly iframe posts its first message, i.e. it rendered.
  const loaded = useRef(false);
  const retried = useRef(false);
  const [stalled, setStalled] = useState(false);

  // Built client-side only: the UTM cookie isn't readable during SSR.
  // encodeURIComponent, not URLSearchParams: Calendly re-parses the URL
  // and treats "+" literally, so "Jane+Doe" would prefill with a plus sign.
  const bookingUrl = () => {
    const params: [string, string][] = [
      ["name", name],
      ["email", email],
      ["a1", phone],
      ["salesforce_uuid", leadId],
    ];
    const utm = readClientUtmCookie();
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const) {
      params.push([key, utm[key] ?? ""]);
    }
    const qs = params
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join("&");
    return qs ? `${calendlyUrl}${calendlyUrl.includes("?") ? "&" : "?"}${qs}` : calendlyUrl;
  };

  // Initialising by hand (instead of the widget's DOM scan) avoids racing
  // the script load.
  const init = () => {
    const el = host.current;
    const calendly = (window as unknown as { Calendly?: CalendlyApi }).Calendly;
    if (!el || !calendly || el.childElementCount > 0) return;
    calendly.initInlineWidget({ url: bookingUrl(), parentElement: el });
  };

  useEffect(() => {
    if (!visible) return;
    pushDataLayer({ event: "book_view", lead_id: leadId || undefined });
    router.prefetch("/book/thank-you");
  }, [visible, leadId, router]);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;
      loaded.current = true;
      setStalled(false);
      if (e.data?.event === "calendly.event_scheduled") {
        router.push(leadId ? `/book/thank-you?lead_id=${encodeURIComponent(leadId)}` : "/book/thank-you");
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [leadId, router]);

  // Once showing, if the calendar still hasn't rendered (blocked script, a
  // browser that dropped the background load), rebuild it once, and offer
  // the full booking page either way.
  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      if (loaded.current) return;
      setStalled(true);
      if (!retried.current && host.current) {
        retried.current = true;
        host.current.replaceChildren();
        init();
      }
    }, STALL_MS);
    return () => window.clearTimeout(timer);
    // init reads the latest props through bookingUrl; one timer per reveal.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" onReady={init} />
      <div ref={host} style={{ minWidth: "320px", height: "720px" }} />
      {visible && (
        <p className={`m-0 border-t-2 border-rule px-4 py-3 text-center text-[14px] ${stalled ? "text-ink" : "text-muted"}`}>
          Calendar not loading?{" "}
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener"
            onClick={(e) => {
              e.currentTarget.href = bookingUrl();
            }}
            className="font-bold text-solution-dark underline underline-offset-4"
          >
            Open it in a new tab
          </a>
        </p>
      )}
      <noscript>
        <p className="p-6 text-center text-muted">
          The calendar needs JavaScript.{" "}
          <a href={calendlyUrl} className="font-bold text-solution-dark underline">
            Open the booking page
          </a>
          .
        </p>
      </noscript>
    </>
  );
}

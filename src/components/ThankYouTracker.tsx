"use client";

import { useEffect } from "react";
import { pushDataLayer } from "@/lib/dataLayer";
import { readClientUtmCookie } from "@/lib/utm";

export function ThankYouTracker() {
  useEffect(() => {
    const leadId = new URLSearchParams(window.location.search).get("lead_id") ?? undefined;
    pushDataLayer({ event: "generate_lead", lead_id: leadId, ...readClientUtmCookie() });
  }, []);

  return null;
}

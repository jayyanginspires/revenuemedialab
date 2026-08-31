"use client";

import { useEffect } from "react";
import { readClientUtmCookie } from "@/lib/utm";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function ThankYouTracker() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      ...readClientUtmCookie(),
    });
  }, []);

  return null;
}

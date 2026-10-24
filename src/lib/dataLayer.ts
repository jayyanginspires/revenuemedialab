// GTM dataLayer events: apply_start, apply_submit, apply_qualified,
// apply_declined, book_view, generate_lead.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushDataLayer(event: { event: string } & Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

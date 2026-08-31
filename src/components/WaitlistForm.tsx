"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { buildQueryString, readClientUtmCookie } from "@/lib/utm";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const qs = buildQueryString(readClientUtmCookie());
    try {
      await fetch(`/api/lead${qs ? `?${qs}` : ""}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "waitlist",
          email,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("Failed to submit waitlist signup", err);
    }
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="rounded-xl bg-background-pale p-4 text-sm font-medium text-foreground">
        You&apos;re on the list — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border-2 border-border px-4 py-3 text-foreground outline-none focus:border-accent sm:flex-1"
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Join the list"}
      </Button>
    </form>
  );
}

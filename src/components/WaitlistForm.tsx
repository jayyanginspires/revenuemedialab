"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { HONEYPOT_FIELD } from "@/lib/leads";
import { buildQueryString, readClientUtmCookie } from "@/lib/utm";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const qs = buildQueryString(readClientUtmCookie());
    try {
      const res = await fetch(`/api/lead${qs ? `?${qs}` : ""}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "waitlist",
          email,
          submittedAt: new Date().toISOString(),
          elapsedMs: Date.now() - mountedAt.current,
          [HONEYPOT_FIELD]: honeypot,
        }),
      });
      if (res.status === 400) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Please check your email and try again.");
        setStatus("idle");
        return;
      }
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
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col gap-3 sm:flex-row">
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
    </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <input
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      {error && (
        <p role="alert" className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}

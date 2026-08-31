"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { ArrowUpRightIcon } from "@/components/Icons";

export function WorkbookCapture({ heading }: { heading?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/workbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      router.push("/marketing/workbook");
    } catch (err) {
      setSending(false);
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="my-10 rounded-2xl border border-accent/30 bg-background-pale p-7">
      <p className="eyebrow text-accent-dark">Free workbook</p>
      <h3 className="mt-2 text-xl font-extrabold tracking-tight text-foreground">
        {heading ?? "Get the workbook that goes with this"}
      </h3>
      <p className="mt-2 leading-relaxed text-muted">
        Every framework here as a fill-in workbook. The triple test, power/trust/likeness, your
        content ladder, the empathy map, and a plan you can run this month.
      </p>

      <form onSubmit={onSubmit} className="mt-5">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            autoComplete="given-name"
            className="w-full rounded-lg border border-border bg-paper px-3.5 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent sm:w-44"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            autoComplete="email"
            className="w-full flex-1 rounded-lg border border-border bg-paper px-3.5 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
          />
          <Button type="submit" disabled={sending} className="!py-3 shrink-0">
            {sending ? "Sending…" : "Send it to me"}
            {!sending && <ArrowUpRightIcon className="h-4 w-4" />}
          </Button>
        </div>
        {error && <p className="mt-3 text-sm text-[#B4231F]">{error}</p>}
        <p className="mt-3 text-xs text-muted">
          You&rsquo;ll also get the newsletter. Unsubscribe whenever.
        </p>
      </form>
    </div>
  );
}

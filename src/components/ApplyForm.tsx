"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { preconnect, preload } from "react-dom";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { ChevronDownIcon } from "@/components/Icons";
import { COUNTRY_CODES } from "@/lib/countryCodes";
import { BOOKING } from "@/lib/content";
import {
  BOTTLENECK_OPTIONS,
  BOTTLENECK_OTHER_VALUE,
  HONEYPOT_FIELD,
  REVENUE_NOT_QUALIFYING,
  REVENUE_OPTIONS,
} from "@/lib/leads";
import { buildQueryString, readClientUtmCookie, withPersistedUtm } from "@/lib/utm";

type ChoiceOption = { value: string; label: string };

function ChoiceGroup({
  legend,
  name,
  options,
  value,
  onChange,
  columns = 2,
  otherOption,
}: {
  legend: string;
  name: string;
  options: ChoiceOption[];
  value: string;
  onChange: (value: string) => void;
  columns?: 2 | 4;
  otherOption?: {
    text: string;
    onTextChange: (text: string) => void;
    placeholder: string;
  };
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-foreground">{legend}</legend>
      <div
        className={`mt-2.5 grid gap-2 ${columns === 4 ? "sm:grid-cols-4" : "sm:grid-cols-2"}`}
      >
        {options.map((option) => {
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              className={`cursor-pointer rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors ${
                checked
                  ? "border-accent bg-accent/5 text-foreground"
                  : "border-border text-muted hover:border-accent/40"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                required
                className="sr-only"
              />
              {option.label}
            </label>
          );
        })}
        {otherOption && (
          <label
            className={`cursor-pointer rounded-lg border px-3.5 py-2.5 text-sm transition-colors ${
              value === BOTTLENECK_OTHER_VALUE
                ? "border-accent bg-accent/5"
                : "border-border hover:border-accent/40"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={BOTTLENECK_OTHER_VALUE}
              checked={value === BOTTLENECK_OTHER_VALUE}
              onChange={() => onChange(BOTTLENECK_OTHER_VALUE)}
              required
              className="sr-only"
            />
            <input
              type="text"
              value={otherOption.text}
              onFocus={() => onChange(BOTTLENECK_OTHER_VALUE)}
              onChange={(e) => {
                onChange(BOTTLENECK_OTHER_VALUE);
                otherOption.onTextChange(e.target.value);
              }}
              placeholder={otherOption.placeholder}
              className="w-full bg-transparent text-foreground outline-none placeholder:text-muted"
            />
          </label>
        )}
      </div>
    </fieldset>
  );
}

export function ApplyForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [stage, setStage] = useState<"form" | "calendly">("form");
  const sectionRef = useRef<HTMLDivElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryName, setCountryName] = useState(COUNTRY_CODES[0].name);
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [bottleneckOther, setBottleneckOther] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const mountedAt = useRef(0);

  // Warm up everything the next step needs *before* the visitor submits, so
  // the Calendly embed is ready to swap in instantly instead of racing the
  // webhook and Calendly's own asset fetches.
  useEffect(() => {
    mountedAt.current = Date.now();
    router.prefetch(withPersistedUtm("/apply/declined"));
    router.prefetch(withPersistedUtm("/book/thank-you"));
    preconnect("https://calendly.com");
    preconnect("https://assets.calendly.com");
    preload("https://assets.calendly.com/assets/external/widget.js", { as: "script" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Bring the swapped-in Calendly embed into view — the visitor may have
  // scrolled while filling out the form, so the button they just pressed
  // isn't necessarily where the calendar appears.
  useEffect(() => {
    if (stage === "calendly") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [stage]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const countryDial = COUNTRY_CODES.find((c) => c.name === countryName)?.dial ?? "+1";

    const payload = {
      type: "application",
      fullName,
      email,
      phone: phone ? `${countryDial} ${phone}` : phone,
      business,
      monthlyRevenue,
      bottleneck,
      bottleneckOther: bottleneck === BOTTLENECK_OTHER_VALUE ? bottleneckOther : "",
      submittedAt: new Date().toISOString(),
      elapsedMs: Date.now() - mountedAt.current,
      [HONEYPOT_FIELD]: honeypot,
    };

    const qs = buildQueryString(readClientUtmCookie());

    // Wait for the server's validation (it checks the email domain can
    // actually receive mail) so a bad entry can be corrected here. The Zapier
    // forward itself still happens after the response is sent.
    try {
      const res = await fetch(`/api/lead${qs ? `?${qs}` : ""}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 400) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Please check your details and try again.");
        setSubmitting(false);
        return;
      }
    } catch (err) {
      // A network hiccup shouldn't strand a real applicant — let them through.
      console.error("Failed to submit application", err);
    }

    if (REVENUE_NOT_QUALIFYING.has(monthlyRevenue)) {
      router.push(withPersistedUtm("/apply/declined"));
      return;
    }

    // Qualifying applicants stay on this page — the form is swapped for the
    // Calendly embed in place, and CalendlyEmbed itself handles navigating
    // to /book/thank-you once they actually book a time.
    setStage("calendly");
  }

  if (stage === "calendly") {
    return (
      <div ref={sectionRef} className="scroll-mt-6">
        <h2 className="h2-display mb-6 text-center text-2xl text-accent md:text-3xl">
          Step 2: Schedule Your Call
        </h2>
        <CalendlyEmbed calendlyUrl={BOOKING.calendlyUrl} />
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="scroll-mt-6">
      <h2 className="h2-display mb-6 text-center text-2xl text-accent md:text-3xl">Step 1: Apply</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Full name*"
            aria-label="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
          />
        </div>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Business email*"
            aria-label="Business email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
          />
        </div>
        <div className="flex items-stretch rounded-lg border border-border transition-colors focus-within:border-accent">
          <div className="relative flex items-center">
            <span className="sr-only">Country code</span>
            <select
              aria-label="Country code"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              required
              className="h-full appearance-none rounded-l-[7px] bg-transparent py-2.5 pl-3 pr-6 text-sm text-foreground outline-none"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.flag} {c.dial}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-1.5 h-3.5 w-3.5 text-muted" />
          </div>
          <span className="my-2 w-px bg-border" aria-hidden="true" />
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel-national"
            placeholder="Phone*"
            aria-label="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full min-w-0 rounded-r-[7px] bg-transparent py-2.5 pl-2.5 pr-3.5 text-sm text-foreground outline-none placeholder:text-muted"
          />
        </div>
      </div>

      <div>
        <label htmlFor="business" className="text-sm font-semibold text-foreground">
          Tell me about your business
        </label>
        <input
          id="business"
          name="business"
          type="text"
          required
          placeholder="*"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="mt-2.5 w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
        />
      </div>

      <ChoiceGroup
        legend="Monthly Revenue (Approximate)"
        name="monthlyRevenue"
        options={REVENUE_OPTIONS}
        value={monthlyRevenue}
        onChange={setMonthlyRevenue}
      />

      <ChoiceGroup
        legend="Which best describes your biggest bottleneck with content and media right now?"
        name="bottleneck"
        options={BOTTLENECK_OPTIONS}
        value={bottleneck}
        onChange={setBottleneck}
        otherOption={{
          text: bottleneckOther,
          onTextChange: setBottleneckOther,
          placeholder: "Other (briefly describe)*",
        }}
      />

      {/* Honeypot: hidden from people and screen readers, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
        <input
          id={HONEYPOT_FIELD}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {error && (
        <p role="alert" className="text-center text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <div className="flex justify-center">
        <Button type="submit" disabled={submitting} className="!px-9 !py-4 !text-[17px]">
          {submitting ? "Submitting…" : "Submit application"}
        </Button>
      </div>
      </form>
    </div>
  );
}

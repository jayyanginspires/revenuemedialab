"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  BOTTLENECK_MAX,
  CHANNEL_OPTIONS,
  HONEYPOT_FIELD,
  INVESTMENT_OPTIONS,
  REVENUE_OPTIONS,
  TIMING_OPTIONS,
} from "@/lib/leads";
import { BOOK, DECLINED } from "@/lib/apparatus";
import { pushDataLayer } from "@/lib/dataLayer";
import { BookingEmbed } from "./BookingEmbed";

// A plain, two-step application. Step 1 is contact details and revenue;
// step 2 is the rest and the submit. On submit the same spot turns into the
// calendar (qualified) or a short "not the right fit yet" note, so nobody
// leaves the page between applying and booking.
//
// Contact details are saved as a partial lead once a valid email is in:
// when they leave a step-1 field, click Continue, or close the tab. The
// notice at the top of step 1 says so before they type anything.

type Answers = {
  fullName: string;
  email: string;
  phone: string;
  website: string;
  revenue: string;
  channels: string;
  bottleneck: string;
  timing: string;
  investment: string;
};
type Field = keyof Answers;

const EMPTY: Answers = {
  fullName: "",
  email: "",
  phone: "",
  website: "",
  revenue: "",
  channels: "",
  bottleneck: "",
  timing: "",
  investment: "",
};

const STEP1: Field[] = ["fullName", "email", "phone", "website", "revenue"];
const STEP2: Field[] = ["channels", "bottleneck", "timing", "investment"];
const ORDER: Field[] = [...STEP1, ...STEP2];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WEBSITE_RE = /^(https?:\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+(\/\S*)?$/i;

function validate(field: Field, value: string): string | null {
  const v = value.trim();
  switch (field) {
    case "fullName":
      return v.length < 2 ? "Enter your full name." : null;
    case "email":
      return EMAIL_RE.test(v) ? null : "Enter your business email so we can send your calendar invite.";
    case "phone":
      return v.replace(/\D/g, "").length < 7 ? "Enter a phone number we can reach you on." : null;
    case "website":
      return WEBSITE_RE.test(v) ? null : "Enter your company website, like acme.com.";
    case "bottleneck":
      return v.length < 2 ? "Tell us a little about where content gets stuck." : null;
    default:
      return v ? null : "Choose one option.";
  }
}

// US numbers format as you type: 3612375900 -> 361-237-5900. A leading +1 or
// 1 is dropped. Anything else that starts with "+" or runs past 10 digits is
// an international number, so it's left exactly as typed.
function formatPhone(value: string) {
  const raw = value.trimStart();
  if (raw.startsWith("+") && !raw.startsWith("+1")) return value;
  let d = raw.replace(/\D/g, "");
  if (raw.startsWith("+1") || (d.length === 11 && d.startsWith("1"))) d = d.slice(1);
  if (d.length > 10) return value;
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}

type Result = { qualified: true; leadId: string } | { qualified: false };

const inputClass =
  "min-h-11 w-full rounded-[12px] border-2 bg-white px-3.5 text-[16px] text-ink placeholder:text-muted";

function TextField({
  field,
  label,
  type = "text",
  autoComplete,
  inputMode,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}: {
  field: Field;
  label: string;
  type?: string;
  placeholder?: string;
  onBlur?: () => void;
  autoComplete: string;
  inputMode?: "email" | "tel" | "url";
  value: string;
  error?: string;
  onChange: (v: string) => void;
}) {
  const id = `apply-${field}`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[14px] font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={field}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputClass} ${error ? "border-error" : "border-rule focus:border-ink"}`}
      />
      {error && (
        <p id={`${id}-error`} className="m-0 text-[14px] font-semibold text-error">
          {error}
        </p>
      )}
    </div>
  );
}

function ChoiceField({
  field,
  question,
  options,
  value,
  error,
  onChange,
  columns = 2,
}: {
  field: Field;
  question: string;
  options: { value: string; label: string }[];
  value: string;
  error?: string;
  onChange: (v: string) => void;
  columns?: 2 | 3;
}) {
  return (
    <fieldset
      id={`apply-${field}`}
      tabIndex={-1}
      className="m-0 flex min-w-0 flex-col gap-2.5 border-0 p-0"
      aria-describedby={error ? `apply-${field}-error` : undefined}
    >
      <legend className="mb-2 p-0 text-[17px] font-semibold leading-snug text-ink">
        {question}
      </legend>
      <div className={`grid gap-2 ${columns === 3 ? "grid-cols-3" : "sm:grid-cols-2"}`}>
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <label
              key={opt.value}
              className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-[12px] border-2 px-3.5 py-2 text-[15px] leading-snug text-ink transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-raw ${
                selected ? "border-solution bg-glass-tint" : "border-rule bg-white hover:border-muted"
              }`}
            >
              <input
                type="radio"
                name={field}
                value={opt.value}
                checked={selected}
                onChange={() => onChange(opt.value)}
                className="h-[18px] w-[18px] shrink-0 accent-[var(--solution)]"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
      {error && (
        <p id={`apply-${field}-error`} className="m-0 text-[14px] font-semibold text-error">
          {error}
        </p>
      )}
    </fieldset>
  );
}

function draftId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : "";
}

export function ApplyForm() {
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const startedAt = useRef(0);
  const started = useRef(false);
  // Ties partial saves to the application, and doubles as the lead id the
  // calendar is prefilled with, so the calendar can load before submit.
  const [draft] = useState(draftId);
  const draftRef = useRef(draft);
  const answersRef = useRef<Answers>(EMPTY);
  const lastPartial = useRef("");
  const submitted = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const stepHeading = useRef<HTMLHeadingElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    if (result) resultRef.current?.focus();
  }, [result]);

  // Save the contact details once there's a valid email, at most once per
  // change. keepalive lets the request finish even as the tab closes.
  const sendPartial = (capturedOn: "blur" | "continue" | "leave") => {
    if (submitted.current) return;
    const a = answersRef.current;
    if (!EMAIL_RE.test(a.email.trim())) return;
    const contact = {
      fullName: a.fullName.trim(),
      email: a.email.trim(),
      phone: a.phone.trim(),
      website: a.website.trim(),
      revenue: a.revenue,
    };
    const key = JSON.stringify(contact);
    if (key === lastPartial.current) return;
    lastPartial.current = key;
    void fetch(`/api/lead${window.location.search}`, {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stage: "partial",
        draft_id: draftRef.current,
        ...contact,
        capturedOn,
        [HONEYPOT_FIELD]: (document.getElementById(HONEYPOT_FIELD) as HTMLInputElement | null)?.value ?? "",
        elapsedMs: Date.now() - startedAt.current,
      }),
    }).catch(() => {});
  };

  useEffect(() => {
    const onLeave = () => sendPartial("leave");
    const onVisibility = () => document.visibilityState === "hidden" && sendPartial("leave");
    window.addEventListener("pagehide", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // sendPartial only reads refs, so binding it once never goes stale.
  }, []);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    pushDataLayer({ event: "apply_start" });
  };

  const set = (field: Field, value: string) => {
    markStarted();
    setAnswers((a) => ({ ...a, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const focusField = (field: Field) => {
    const el = document.getElementById(`apply-${field}`);
    el?.scrollIntoView({ block: "center", behavior: "smooth" });
    el?.focus({ preventScroll: true });
  };

  const check = (fields: Field[]) => {
    const found: Partial<Record<Field, string>> = {};
    for (const f of fields) {
      const err = validate(f, answers[f]);
      if (err) found[f] = err;
    }
    setErrors(found);
    const firstBad = fields.find((f) => found[f]);
    if (firstBad) focusField(firstBad);
    return !firstBad;
  };

  const goTo = (next: 1 | 2) => {
    setStep(next);
    setFormError(null);
    window.setTimeout(() => {
      formRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      stepHeading.current?.focus({ preventScroll: true });
    }, 0);
  };

  const onContinue = () => {
    if (!check(STEP1)) return;
    sendPartial("continue");
    pushDataLayer({ event: "apply_step_1" });
    goTo(2);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      onContinue();
      return;
    }
    if (!check(STEP2)) return;

    setSubmitting(true);
    setFormError(null);
    pushDataLayer({ event: "apply_submit" });
    try {
      const res = await fetch(`/api/lead${window.location.search}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...answers,
          draft_id: draft,
          [HONEYPOT_FIELD]: (document.getElementById(HONEYPOT_FIELD) as HTMLInputElement | null)?.value ?? "",
          elapsedMs: Date.now() - startedAt.current,
          submittedAt: new Date().toISOString(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const field = data.field as Field | undefined;
        if (field && ORDER.includes(field)) {
          setErrors({ [field]: data.error });
          if (STEP1.includes(field)) setStep(1);
          window.setTimeout(() => focusField(field), 0);
        } else {
          setFormError("Something went wrong sending your application. Try again in a moment.");
        }
        setSubmitting(false);
        return;
      }
      submitted.current = true;
      if (data.qualified) {
        pushDataLayer({ event: "apply_qualified", lead_id: data.lead_id });
        setResult({ qualified: true, leadId: data.lead_id });
      } else {
        pushDataLayer({ event: "apply_declined", lead_id: data.lead_id });
        setResult({ qualified: false });
      }
    } catch {
      setFormError("Something went wrong sending your application. Check your connection and try again.");
      setSubmitting(false);
    }
  };

  // The calendar loads hidden as soon as the visitor reaches step 2 with a
  // revenue that can qualify, so it's ready the moment they submit instead of
  // starting a 6-8 second Calendly load then. It stays mounted in the same
  // spot in the tree, so revealing it doesn't reload it.
  const qualified = result?.qualified === true;
  const leadId = result?.qualified ? result.leadId : draft;
  const preload = step === 2 && answers.revenue !== "" && answers.revenue !== "under_1m" && !!draft && !result;
  const embed =
    qualified || preload ? (
      <div
        aria-hidden={qualified ? undefined : true}
        inert={!qualified}
        className={
          qualified
            ? "overflow-hidden rounded-[16px] border-2 border-rule"
            : "pointer-events-none fixed left-0 top-0 -z-10 w-[min(900px,100vw)] opacity-0"
        }
      >
        <BookingEmbed
          key={`${answers.fullName.trim()}|${answers.email.trim()}|${answers.phone.trim()}|${leadId}`}
          visible={qualified}
          calendlyUrl={BOOK.calendlyUrl}
          name={answers.fullName.trim()}
          email={answers.email.trim()}
          phone={answers.phone.trim()}
          leadId={leadId}
        />
      </div>
    ) : null;

  const blurSave = () => sendPartial("blur");

  let view;
  if (qualified) {
    view = (
      <div ref={resultRef} tabIndex={-1} className="flex flex-col gap-5 outline-none">
        <h3 className="m-0 text-[24px] font-bold text-ink">Thanks, {answers.fullName.trim().split(" ")[0]}. Pick a time here.</h3>
      </div>
    );
  } else if (result) {
    view = (
      <div ref={resultRef} tabIndex={-1} className="flex flex-col gap-3 outline-none">
        <h3 className="m-0 text-[24px] font-bold text-ink">Thanks for applying.</h3>
        <p className="m-0 text-[17px] leading-relaxed text-ink-soft">{DECLINED.body}</p>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {DECLINED.resources.map((r) => (
            <li key={r.href}>
              <a href={r.href} className="text-[16px] font-bold text-solution-dark underline underline-offset-4">
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    view = (
      <form ref={formRef} onSubmit={onSubmit} onFocus={markStarted} noValidate className="flex scroll-mt-6 flex-col gap-6">
        {/* Bots fill this; people never see it. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={HONEYPOT_FIELD}>Fax</label>
          <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="m-0 text-[14px] font-semibold text-muted">Step {step} of 2</p>
          <div
            role="progressbar"
            aria-label="Application progress"
            aria-valuemin={1}
            aria-valuemax={2}
            aria-valuenow={step}
            className="h-2 overflow-hidden rounded-full bg-glass-tint"
          >
            <div
              className="h-full rounded-full bg-solution transition-[width] duration-300 motion-reduce:transition-none"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>
        </div>

        <h3 ref={stepHeading} tabIndex={-1} className="m-0 -mb-2 text-[24px] font-bold leading-tight text-ink outline-none">
          {step === 1 ? "Your details" : "About your content"}
        </h3>

        {step === 1 ? (
          <>
            <fieldset className="m-0 min-w-0 border-0 p-0">
              <legend className="sr-only">Your details</legend>
              <p className="m-0 mb-3 text-[14px] text-muted">We&apos;ll only use this to follow up about your application.</p>
              <div className="grid gap-x-4 gap-y-3.5 sm:grid-cols-2">
                <TextField field="fullName" label="Full name" autoComplete="name" value={answers.fullName} error={errors.fullName} onChange={(v) => set("fullName", v)} onBlur={blurSave} />
                <TextField field="email" label="Business email" type="email" inputMode="email" autoComplete="email" value={answers.email} error={errors.email} onChange={(v) => set("email", v)} onBlur={blurSave} />
                <TextField field="phone" label="Phone number" type="tel" inputMode="tel" autoComplete="tel" value={answers.phone} error={errors.phone} onChange={(v) => set("phone", formatPhone(v))} onBlur={blurSave} />
                <TextField field="website" label="Company website" inputMode="url" autoComplete="url" placeholder="acme.com" value={answers.website} error={errors.website} onChange={(v) => set("website", v)} onBlur={blurSave} />
              </div>
            </fieldset>

            <ChoiceField field="revenue" question="Current annual revenue" options={REVENUE_OPTIONS} value={answers.revenue} error={errors.revenue} onChange={(v) => set("revenue", v)} />

            <button type="submit" className="btn-primary self-start">
              Continue
            </button>
          </>
        ) : (
          <>
            <ChoiceField field="channels" question="Which channels matter most?" options={CHANNEL_OPTIONS} value={answers.channels} error={errors.channels} onChange={(v) => set("channels", v)} columns={3} />

            <div className="flex flex-col gap-2.5">
              <label htmlFor="apply-bottleneck" className="text-[17px] font-semibold leading-snug text-ink">
                What feels like the biggest bottleneck right now with your content?
              </label>
              <textarea
                id="apply-bottleneck"
                name="bottleneck"
                rows={2}
                maxLength={BOTTLENECK_MAX}
                value={answers.bottleneck}
                onChange={(e) => set("bottleneck", e.target.value)}
                aria-invalid={errors.bottleneck ? true : undefined}
                aria-describedby={errors.bottleneck ? "apply-bottleneck-error" : undefined}
                className={`w-full rounded-[12px] border-2 bg-white px-3.5 py-3 text-[17px] leading-relaxed text-ink ${
                  errors.bottleneck ? "border-error" : "border-rule focus:border-ink"
                }`}
              />
              {errors.bottleneck && (
                <p id="apply-bottleneck-error" className="m-0 text-[14px] font-semibold text-error">
                  {errors.bottleneck}
                </p>
              )}
            </div>

            <ChoiceField field="timing" question="How soon are you looking to get content live?" options={TIMING_OPTIONS} value={answers.timing} error={errors.timing} onChange={(v) => set("timing", v)} />
            <ChoiceField
              field="investment"
             
              question="Our partnerships start in the low five figures per month, with some clients investing multi-six figures annually. If everything made sense, is this level of investment in line with how your company funds growth?"
              options={INVESTMENT_OPTIONS}
              value={answers.investment}
              error={errors.investment}
              onChange={(v) => set("investment", v)}
            />

            {formError && (
              <p role="alert" className="m-0 text-[15px] font-semibold text-error">
                {formError}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="btn-primary disabled:opacity-60" disabled={submitting}>
                {submitting ? "Sending…" : "Submit and pick a time"}
              </button>
              <button type="button" onClick={() => goTo(1)} className="btn-text" disabled={submitting}>
                Back
              </button>
            </div>
          </>
        )}
      </form>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {view}
      {embed}
    </div>
  );
}

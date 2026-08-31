"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[16px] font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-accent text-white shadow-[0_10px_24px_-10px_rgba(31,143,92,0.55)] hover:bg-accent-dark hover:-translate-y-0.5",
  secondary:
    "bg-paper text-foreground border-2 border-accent hover:bg-background-pale hover:-translate-y-0.5",
};

type CommonProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
};

// Next's <Link> only re-runs its hash-scroll on an actual URL change, so a
// second click on an already-"/#apply" URL does nothing, and the scroll it
// does perform is an instant jump. Scrolling the target into view ourselves
// on every click (smoothly) fixes both.
function scrollToApply(e: MouseEvent<HTMLAnchorElement>) {
  if (window.location.pathname !== "/") return;
  const target = document.getElementById("apply");
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.location.hash !== "#apply") {
    window.history.pushState(null, "", "/#apply");
  }
}

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      onClick={href === "/#apply" ? scrollToApply : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

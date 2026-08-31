"use client";

import { useEffect, useRef, useState } from "react";

// Turns solid green once scrolled to and stays that way — a one-way,
// cumulative progress indicator rather than a toggling highlight, so the
// timeline visibly "fills in" as the visitor scrolls down through it.
export function PhaseBadge({ number }: { number: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.6) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -40% 0px" }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-lg transition-all duration-500 group-hover:scale-110 ${
        active
          ? "bg-accent text-white shadow-[0_10px_24px_-8px_rgba(31,143,92,0.6)]"
          : "border-2 border-border bg-white text-muted"
      }`}
    >
      {number}
    </span>
  );
}

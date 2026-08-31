"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

// Subtle fade+rise on scroll into view. Visible by default (SSR, no-JS, and
// JS-failure cases all render the final state) — JS only pre-hides content
// that's genuinely below the fold at mount, then reveals it via
// IntersectionObserver, with a timeout safety net in case the observer
// never fires for any reason.
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.95;
    if (alreadyInView) return;

    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(node);

    const fallback = window.setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

import Link from "next/link";

// Three-tube mark: capsules of ascending height, filled green from the
// bottom at ~39%, 58% and 76%. Inner fills are inset rects (no clipPath) so
// the mark can render more than once per page without id collisions.
const TUBES = [
  { x: 4, y: 34, h: 54, fill: 0.39 },
  { x: 34, y: 18, h: 70, fill: 0.58 },
  { x: 64, y: 4, h: 84, fill: 0.76 },
];

export function RmlMark({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const outline = tone === "dark" ? "var(--bench-dark-ink)" : "var(--ink)";
  return (
    <svg viewBox="0 0 86 92" className={`rml-mark ${className}`} aria-hidden="true">
      {TUBES.map((t) => {
        const fillH = Math.round((t.h - 4) * t.fill);
        return (
          <rect
            key={`f${t.x}`}
            className="slosh"
            x={t.x + 2}
            y={t.y + t.h - 2 - fillH}
            width="14"
            height={fillH}
            rx="7"
            fill="var(--solution)"
          />
        );
      })}
      {TUBES.map((t) => (
        <rect
          key={`o${t.x}`}
          x={t.x}
          y={t.y}
          width="18"
          height={t.h}
          rx="9"
          fill="none"
          stroke={outline}
          strokeWidth="4"
        />
      ))}
    </svg>
  );
}

export function RmlLockup({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      aria-label="Revenue Media Lab home"
      className={`rml-lockup flex min-h-11 items-center gap-2.5 ${
        tone === "dark" ? "text-bench-dark-ink" : "text-ink"
      }`}
    >
      <RmlMark tone={tone} className="h-8 w-auto shrink-0" />
      <span className="font-display text-[19px] leading-[0.95] tracking-[0.02em] sm:text-[22px]">
        REVENUE MEDIA <span className="text-solution">LAB</span>
      </span>
    </Link>
  );
}

// Inlined from public/brand/logo/rml-mark-green.svg so its fill/stroke track
// the live theme tokens (var(--color-accent) / var(--color-foreground))
// instead of being baked in as static hex values.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 86 92" className={className} aria-hidden="true">
      <defs>
        <clipPath id="rml-mark-1">
          <rect x="2" y="8" width="22" height="76" rx="11" />
        </clipPath>
        <clipPath id="rml-mark-2">
          <rect x="32" y="8" width="22" height="76" rx="11" />
        </clipPath>
        <clipPath id="rml-mark-3">
          <rect x="62" y="8" width="22" height="76" rx="11" />
        </clipPath>
      </defs>
      <g clipPath="url(#rml-mark-1)">
        <rect x="2" y="60" width="22" height="30" fill="var(--color-accent)" />
      </g>
      <g clipPath="url(#rml-mark-2)">
        <rect x="32" y="46" width="22" height="44" fill="var(--color-accent)" />
      </g>
      <g clipPath="url(#rml-mark-3)">
        <rect x="62" y="32" width="22" height="58" fill="var(--color-accent)" />
      </g>
      <rect x="2" y="8" width="22" height="76" rx="11" fill="none" stroke="var(--color-foreground)" strokeWidth="4" />
      <rect x="32" y="8" width="22" height="76" rx="11" fill="none" stroke="var(--color-foreground)" strokeWidth="4" />
      <rect x="62" y="8" width="22" height="76" rx="11" fill="none" stroke="var(--color-foreground)" strokeWidth="4" />
      <rect x="0" y="4" width="26" height="5" rx="2.5" fill="var(--color-foreground)" />
      <rect x="30" y="4" width="26" height="5" rx="2.5" fill="var(--color-foreground)" />
      <rect x="60" y="4" width="26" height="5" rx="2.5" fill="var(--color-foreground)" />
    </svg>
  );
}

// Wordmark set in the site's own display face (Anton) rather than the SVG's
// font, per instruction to keep the established type system — only the mark
// and colors come from the brand files.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display uppercase leading-none tracking-tight text-foreground ${className}`}>
      Revenue Media <span className="text-accent">Lab</span>
    </span>
  );
}

export function PlaceholderFlag({ label = "Placeholder — replace before launch" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-accent/50 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
      {label}
    </span>
  );
}

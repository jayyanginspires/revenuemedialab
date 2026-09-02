import { ReactNode } from "react";
import Link from "next/link";

// Deliberately plain. These pages exist to be found and read, not to sell.
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link href="/" className="eyebrow text-muted hover:text-accent">
          ← Revenue Media Lab
        </Link>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated {updated}</p>
        <div className="mt-10 leading-relaxed text-foreground [&_a]:text-accent [&_a]:underline [&_h2]:mt-9 [&_h2]:text-lg [&_h2]:font-bold [&_li]:mt-1.5 [&_p]:mt-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </main>
  );
}

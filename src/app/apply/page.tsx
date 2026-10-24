import type { Metadata } from "next";
import { Nav } from "@/components/apparatus/Nav";
import { ApplyForm } from "@/components/apparatus/ApplyForm";
import { APPLY } from "@/lib/apparatus";

export const metadata: Metadata = {
  title: "See if you qualify | Revenue Media Lab",
  description: "Nine quick questions to see if a fractional content department for X and LinkedIn fits your company.",
};

export default function ApplyPage() {
  return (
    <div className="apparatus flex min-h-screen flex-col">
      <Nav minimal />
      <main className="mx-auto w-full max-w-[680px] flex-1 px-4 pb-20 pt-4 sm:px-6">
        <h1 className="display-h2 m-0 mb-6">{APPLY.headline}</h1>
        <div className="rounded-[32px] border-2 border-ink bg-glass p-6 shadow-[0_8px_0_var(--ink)] md:p-10">
          <ApplyForm />
        </div>
      </main>
    </div>
  );
}

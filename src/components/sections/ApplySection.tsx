import { ApplyForm } from "@/components/ApplyForm";

export function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-6 bg-background-pale py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_1px_0_rgba(18,24,26,0.03),0_16px_28px_-20px_rgba(18,24,26,0.2)] md:p-10">
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}

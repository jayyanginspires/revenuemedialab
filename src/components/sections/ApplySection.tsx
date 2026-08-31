import { ApplyForm } from "@/components/ApplyForm";

export function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-6 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="h2-display mb-6 text-center text-2xl text-accent md:text-3xl">
          Step 1: Apply
        </h2>
        <ApplyForm />
      </div>
    </section>
  );
}

import { ApplyForm } from "@/components/ApplyForm";

export function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-6 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <ApplyForm />
      </div>
    </section>
  );
}

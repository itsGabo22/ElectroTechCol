import { Container } from "@/components/ui/Container";
import { MotionItem, MotionReveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { processSteps, sectionHeadings } from "@/lib/constants";

export function Process() {
  return (
    <section className="bg-technical-white py-20 sm:py-24">
      <Container>
        <MotionReveal>
          <SectionHeading {...sectionHeadings.process} />
        </MotionReveal>
        <MotionReveal stagger className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-industrial-blue/20 lg:block" />
          {processSteps.map((step, index) => (
            <MotionItem key={step.title} variants={fadeInUp} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-8 border-technical-white bg-industrial-blue text-xl font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-6 text-lg font-bold text-anthracite">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-anthracite/70">{step.description}</p>
            </MotionItem>
          ))}
        </MotionReveal>
      </Container>
    </section>
  );
}

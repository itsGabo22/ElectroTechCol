import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MotionItem, MotionReveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { sectionHeadings, specialties } from "@/lib/constants";

export function Specialties() {
  return (
    <section id="especialidades" className="bg-white py-20 sm:py-24">
      <Container>
        <MotionReveal>
          <SectionHeading {...sectionHeadings.specialties} />
        </MotionReveal>
        <MotionReveal stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {specialties.map((specialty) => (
            <MotionItem key={specialty.title} variants={fadeInUp} className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-technical-white p-7 shadow-soft">
              <div className="flex items-start gap-5">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric-orange text-white">
                  <Icon name={specialty.icon} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-industrial-blue">{specialty.metric}</p>
                  <h3 className="mt-2 text-xl font-bold text-anthracite">{specialty.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-anthracite/70">{specialty.description}</p>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionReveal>
      </Container>
    </section>
  );
}

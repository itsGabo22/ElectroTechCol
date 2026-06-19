import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MotionItem, MotionReveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { sectionHeadings, services } from "@/lib/constants";

export function Services() {
  return (
    <section id="servicios" className="bg-technical-white py-20 sm:py-24">
      <Container>
        <MotionReveal>
          <SectionHeading {...sectionHeadings.services} />
        </MotionReveal>
        <MotionReveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <MotionItem key={service.title} variants={fadeInUp}>
              <Card className="h-full hover:-translate-y-1 hover:border-industrial-blue/30">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-industrial-blue text-white">
                  <Icon name={service.icon} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-anthracite">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-anthracite/70">{service.description}</p>
              </Card>
            </MotionItem>
          ))}
        </MotionReveal>
      </Container>
    </section>
  );
}

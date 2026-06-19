import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MotionItem, MotionReveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { guarantees, sectionHeadings } from "@/lib/constants";

export function Guarantees() {
  return (
    <section id="garantias" className="bg-technical-white py-20 sm:py-24">
      <Container>
        <MotionReveal>
          <SectionHeading {...sectionHeadings.guarantees} />
        </MotionReveal>
        <MotionReveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((guarantee) => (
            <MotionItem key={guarantee.title} variants={fadeInUp}>
              <Card className="h-full">
                <Icon name={guarantee.icon} className="h-8 w-8 text-industrial-blue" />
                <h3 className="mt-5 text-lg font-bold text-anthracite">{guarantee.title}</h3>
                <p className="mt-3 text-sm leading-6 text-anthracite/70">{guarantee.description}</p>
              </Card>
            </MotionItem>
          ))}
        </MotionReveal>
      </Container>
    </section>
  );
}

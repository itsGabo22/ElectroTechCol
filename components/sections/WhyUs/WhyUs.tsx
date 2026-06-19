import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MotionItem, MotionReveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { sectionHeadings, valueProps } from "@/lib/constants";

export function WhyUs() {
  return (
    <section className="bg-anthracite py-20 sm:py-24">
      <Container>
        <MotionReveal>
          <SectionHeading {...sectionHeadings.whyUs} inverse />
        </MotionReveal>
        <MotionReveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <MotionItem key={prop.title} variants={fadeInUp}>
              <Card className="h-full border-white/10 bg-white/10 text-white shadow-none">
                <Icon name={prop.icon} className="h-8 w-8 text-electric-orange" />
                <h3 className="mt-5 text-lg font-bold">{prop.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{prop.description}</p>
              </Card>
            </MotionItem>
          ))}
        </MotionReveal>
      </Container>
    </section>
  );
}

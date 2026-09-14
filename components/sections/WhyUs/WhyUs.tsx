
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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <MotionReveal>
              <SectionHeading {...sectionHeadings.whyUs} align="left" inverse />
            </MotionReveal>
          </div>

          {/* Right Column: Features without Cards */}
          <div className="lg:col-span-7">
            <MotionReveal stagger className="grid gap-8 sm:grid-cols-2">
              {valueProps.map((prop) => (
                <MotionItem key={prop.title} variants={fadeInUp} className="relative pl-6">
                  {/* Architectural left border */}
                  <div className="absolute bottom-0 left-0 top-0 w-px bg-electric-orange/30">
                    <div className="absolute left-0 top-0 h-8 w-px bg-electric-orange" />
                  </div>
                  
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-electric-orange">
                    <Icon name={prop.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{prop.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{prop.description}</p>
                </MotionItem>
              ))}
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MotionItem, MotionReveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { portfolioContent } from "@/lib/constants";
import { projects } from "@/lib/projects";

export function Portfolio() {
  return (
    <section id="portafolio" className="bg-white py-20 sm:py-24">
      <Container>
        <MotionReveal>
          <SectionHeading eyebrow={portfolioContent.title} title={portfolioContent.title} description={portfolioContent.description} />
        </MotionReveal>
        {projects.length === 0 ? (
          <MotionReveal className="mx-auto mt-12 max-w-2xl rounded-xl border border-dashed border-industrial-blue/30 bg-technical-white p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-industrial-blue text-white">
              <Icon name="file" className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-anthracite">{portfolioContent.emptyTitle}</h3>
            <p className="mt-3 text-anthracite/70">{portfolioContent.emptyText}</p>
            <Button href="#contacto" variant="ghost" className="mt-6">
              {portfolioContent.emptyCta}
            </Button>
          </MotionReveal>
        ) : (
          <MotionReveal stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <MotionItem key={project.id} variants={fadeInUp}>
                <Card className="overflow-hidden p-0">
                  <div className="relative aspect-[4/3]">
                    <Image src={project.image} alt={project.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-bold text-industrial-blue">{project.category} · {project.year}</p>
                    <h3 className="mt-2 text-lg font-bold text-anthracite">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-anthracite/70">{project.description}</p>
                  </div>
                </Card>
              </MotionItem>
            ))}
          </MotionReveal>
        )}
      </Container>
    </section>
  );
}

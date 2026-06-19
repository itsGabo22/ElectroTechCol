import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/Motion";
import { heroContent } from "@/lib/constants";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-industrial-blue via-[#123f5e] to-anthracite pt-32 text-white sm:pt-36">
      <Container className="relative grid min-h-[760px] items-center gap-12 pb-20 md:grid-cols-[1.02fr_0.98fr] lg:pb-24">
        <MotionReveal>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-electric-orange">{heroContent.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{heroContent.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">{heroContent.primaryCta}</Button>
            <Button href="#servicios" variant="secondary">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </MotionReveal>
        <MotionReveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/15 bg-white/10 shadow-2xl">
            <Image
              src="/industrial-hero.svg"
              alt={heroContent.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 right-6 rounded-xl border border-white/15 bg-anthracite/90 p-4 shadow-soft backdrop-blur">
            <p className="text-sm font-semibold text-white/90">Control, potencia y continuidad energética en un solo enfoque.</p>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/Motion";
import { HeroBackground } from "@/components/sections/Hero/HeroBackground";
import { HeroMedia } from "@/components/sections/Hero/HeroMedia";
import { heroContent } from "@/lib/constants";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-anthracite pt-32 text-white sm:pt-36">
      <HeroBackground />
      <Container className="relative z-10 grid min-h-[760px] items-center gap-12 pb-20 md:grid-cols-[1.02fr_0.98fr] lg:pb-24">
        <MotionReveal>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-electric-orange">{heroContent.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{heroContent.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contacto">{heroContent.primaryCta}</Button>
            <Button href="/#servicios" variant="secondary">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </MotionReveal>
        <HeroMedia />
      </Container>
    </section>
  );
}

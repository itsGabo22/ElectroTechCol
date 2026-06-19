"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionHeadings, testimonials } from "@/lib/constants";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  const previous = () => setActive((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  const next = () => setActive((current) => (current === testimonials.length - 1 ? 0 : current + 1));

  return (
    <section id="testimonios" className="bg-anthracite py-20 text-white sm:py-24">
      <Container>
        <SectionHeading {...sectionHeadings.testimonials} inverse />
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-white/10 bg-white/10 p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-electric-orange text-base font-black text-white">
              {testimonial.avatar}
            </div>
            <div>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-white/60">{testimonial.company}</p>
            </div>
          </div>
          <blockquote className="mt-7 text-xl font-semibold leading-9 text-white/90">“{testimonial.quote}”</blockquote>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2" aria-label="Indicadores de testimonios">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Ver testimonio ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all ${index === active ? "w-8 bg-electric-orange" : "w-2.5 bg-white/30"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Testimonio anterior"
                onClick={previous}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition hover:bg-white/20"
              >
                <ChevronLeft aria-hidden className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Siguiente testimonio"
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition hover:bg-white/20"
              >
                <ChevronRight aria-hidden className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

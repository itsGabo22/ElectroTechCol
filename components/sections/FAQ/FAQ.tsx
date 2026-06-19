"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems, sectionHeadings } from "@/lib/constants";

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading {...sectionHeadings.faq} />
        <div className="mx-auto mt-12 grid max-w-4xl gap-3">
          {faqItems.map((item, index) => {
            const open = active === index;
            return (
              <div key={item.question} className="rounded-xl border border-slate-200 bg-technical-white">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setActive(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-anthracite"
                >
                  <span>{item.question}</span>
                  <ChevronDown aria-hidden className={`h-5 w-5 shrink-0 transition ${open ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-anthracite/70">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

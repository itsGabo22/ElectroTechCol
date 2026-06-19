import { Container } from "@/components/ui/Container";
import { MotionItem, MotionReveal } from "@/components/ui/Motion";
import { trustMetrics } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export function TrustBar() {
  return (
    <section aria-label="Indicadores de confianza" className="bg-white py-8">
      <Container>
        <MotionReveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric) => (
            <MotionItem key={metric.label} variants={fadeInUp} className="rounded-xl border border-slate-200 bg-technical-white p-5 text-center">
              <p className="text-3xl font-black text-industrial-blue">{metric.value}</p>
              <p className="mt-2 text-sm font-semibold text-anthracite/70">{metric.label}</p>
            </MotionItem>
          ))}
        </MotionReveal>
      </Container>
    </section>
  );
}

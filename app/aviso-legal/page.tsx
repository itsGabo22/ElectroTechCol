import { Container } from "@/components/ui/Container";
import { site } from "@/lib/constants";

export const metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de ElectroTech.",
};

export default function LegalNoticePage() {
  return (
    <section className="bg-technical-white pb-20 pt-32">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-black text-anthracite">Aviso Legal</h1>
        <div className="mt-8 space-y-5 rounded-xl bg-white p-6 leading-7 text-anthracite/75 shadow-soft">
          <p>{site.name} ofrece información general sobre sus servicios de electromecánica, automatización y soporte técnico.</p>
          <p>Los contenidos del sitio no reemplazan una evaluación técnica específica del proyecto, instalación o equipo.</p>
          <p>Para solicitudes comerciales o técnicas, comunícate a través de los canales oficiales publicados en este sitio.</p>
        </div>
      </Container>
    </section>
  );
}

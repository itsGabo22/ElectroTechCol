import { Container } from "@/components/ui/Container";
import { site } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: `Aviso Legal y Condiciones de Uso del sitio web de ${site.name}.`,
};

export default function AvisoLegalPage() {
  return (
    <section className="bg-slate-50 pb-20 pt-32 min-h-screen">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-10">Aviso Legal</h1>
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100 text-slate-700 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Información Legal y Aceptación</h2>
          <p>
            El presente aviso legal regula el uso y acceso al sitio web <strong className="text-slate-900">{site.domain}</strong> (en adelante, el "Sitio Web"), del cual es titular <strong className="text-slate-900">{site.name}</strong>, empresa dedicada a la prestación de servicios de ingeniería, electromecánica, automatización industrial y mantenimiento en el territorio de la República de Colombia.
          </p>
          <p>
            La navegación por el Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos del Sitio Web, incluyendo a título enunciativo y no limitativo: textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a <strong className="text-slate-900">{site.name}</strong>, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.
          </p>
          <p>
            Las marcas, nombres comerciales o signos distintivos son titularidad de <strong className="text-slate-900">{site.name}</strong> o de terceros con autorización, sin que el acceso al Sitio Web atribuya ningún derecho sobre las citadas marcas, nombres comerciales y/o signos distintivos.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Condiciones de Uso del Portal</h2>
          <p>
            El usuario se obliga a hacer un uso correcto del Sitio Web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal. El usuario responderá frente a <strong className="text-slate-900">{site.name}</strong> o frente a terceros de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Exclusión de Responsabilidad</h2>
          <p>
            El contenido del presente Sitio Web es de carácter general y tiene una finalidad meramente informativa. <strong className="text-slate-900">{site.name}</strong> no se hace responsable de las decisiones tomadas a partir de la información suministrada en el Sitio Web ni de los daños y perjuicios que en el usuario o terceros puedan derivarse debido a la interrupción de las redes de telecomunicaciones.
          </p>
          <p>
            Los esquemas técnicos, diagramas o estimaciones expuestos son referenciales y bajo ninguna circunstancia sustituyen una evaluación, diseño técnico, diagnóstico presencial o intervención ejecutada por un profesional cualificado.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Legislación y Jurisdicción Aplicable</h2>
          <p>
            Este Aviso Legal se rige en todos y cada uno de sus extremos por la normativa vigente de la República de Colombia. Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, las partes se someten expresamente a los juzgados y tribunales de la República de Colombia.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Datos de Contacto</h2>
          <p>
            Para cualquier inquietud relacionada con este aviso legal o nuestros servicios, puede contactarnos a través del correo electrónico: <strong className="text-slate-900">{site.email}</strong> o comunicarse al teléfono: <strong className="text-slate-900">{site.phone}</strong>.
          </p>
        </div>
      </Container>
    </section>
  );
}


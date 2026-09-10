import { Container } from '@/components/ui/Container';
import { site } from '@/lib/constants';

export const metadata = {
  title: 'Aviso Legal - ElectroTech',
  description: 'Términos, condiciones y aviso legal del sitio web de ElectroTech.',
};

export default function AvisoLegalPage() {
  return (
    <section className="bg-slate-50 pb-20 pt-32 min-h-screen">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-10">Aviso Legal</h1>
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100 text-slate-700 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Información Legal y Aceptación</h2>
          <p>
            El presente aviso legal regula el uso y acceso al sitio web <strong className="text-slate-900">{site.domain}</strong> (en adelante, el &quot;Sitio Web&quot;), del cual es titular <strong className="text-slate-900">{site.name}</strong>, empresa dedicada a la prestación de servicios de ingeniería, electromecánica, automatización industrial y mantenimiento en el territorio de la República de Colombia.
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

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Exclusión de Responsabilidad</h2>
          <p>
            El contenido del presente sitio web es de carácter general y tiene una finalidad meramente informativa. <strong className="text-slate-900">{site.name}</strong> no garantiza plenamente el acceso a todos los contenidos, ni su exhaustividad, corrección, vigencia o actualidad, ni su idoneidad o utilidad para un objetivo específico.
          </p>
          <p>
            <strong className="text-slate-900">{site.name}</strong> excluye, hasta donde permite el ordenamiento jurídico colombiano, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de la imposibilidad de acceso al sitio web, la presencia de virus en los contenidos, o el incumplimiento de las leyes, la buena fe y el orden público como consecuencia de un uso incorrecto del sitio web.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Modificaciones</h2>
          <p>
            <strong className="text-slate-900">{site.name}</strong> se reserva el derecho de modificar el presente Aviso Legal en cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en el sitio web. El uso continuo del sitio web implicará su aceptación de dichas modificaciones. Para dudas adicionales, puede contactarnos en el correo <strong className="text-slate-900">{site.email}</strong>.
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


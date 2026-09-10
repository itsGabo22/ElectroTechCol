import { Container } from '@/components/ui/Container';
import { site } from '@/lib/constants';

export const metadata = {
  title: 'Política de Tratamiento de Datos - ElectroTech',
  description: 'Conozca nuestra política de privacidad y tratamiento de datos personales conforme a la Ley 1581 de 2012 de Colombia.',
};

export default function PoliticaDatosPage() {
  return (
    <section className="bg-slate-50 pb-20 pt-32 min-h-screen">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-10">Política de Tratamiento de Datos</h1>
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100 text-slate-700 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Objetivo</h2>
          <p>
            La presente Política de Tratamiento de Datos Personales tiene como propósito establecer los lineamientos bajo los cuales <strong className="text-slate-900">{site.name}</strong> realiza la recolección, almacenamiento, uso, circulación y supresión de los datos personales, en estricto cumplimiento de la <strong className="text-slate-900">Ley 1581 de 2012</strong>, el Decreto Reglamentario 1377 de 2013 y demás normas que los modifiquen, adicionen o complementen en la República de Colombia.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Responsable del Tratamiento</h2>
          <p>
            <strong className="text-slate-900">{site.name}</strong>, actuará como Responsable del Tratamiento de los datos personales.
            <br />
            <strong className="text-slate-900">Correo electrónico:</strong> {site.email}
            <br />
            <strong className="text-slate-900">Teléfono:</strong> {site.phone}
            <br />
            <strong className="text-slate-900">Ubicación:</strong> {site.location}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Finalidad del Tratamiento</h2>
          <p>
            Los datos personales que recopilamos a través de nuestro formulario de contacto, correo electrónico o llamadas telefónicas serán utilizados para las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Atender solicitudes, peticiones, quejas o reclamos (PQRS).</li>
            <li>Gestionar las cotizaciones y propuestas comerciales solicitadas.</li>
            <li>Proveer información sobre nuestros servicios de ingeniería y mantenimiento.</li>
            <li>Envío de comunicaciones relacionadas con el servicio contratado, facturación y gestión administrativa.</li>
            <li>Evaluar la calidad de nuestros servicios y realizar encuestas de satisfacción.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Derechos de los Titulares</h2>
          <p>
            De conformidad con el artículo 8 de la Ley 1581 de 2012, los titulares de la información tienen derecho a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a {site.name}.</li>
            <li><strong>Solicitar prueba de la autorización</strong> otorgada para el tratamiento de sus datos.</li>
            <li>Ser informado sobre el <strong>uso</strong> que se ha dado a sus datos personales.</li>
            <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normativa.</li>
            <li><strong>Revocar la autorización</strong> y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</li>
            <li><strong>Acceder en forma gratuita</strong> a sus datos personales que hayan sido objeto de Tratamiento.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Procedimiento para Consultas y Reclamos</h2>
          <p>
            Los titulares de la información podrán ejercer sus derechos enviando una solicitud formal al correo electrónico: <strong className="text-slate-900">{site.email}</strong>.
          </p>
          <p>
            La solicitud debe contener: el nombre y documento de identificación del Titular, la descripción de los hechos que dan lugar al reclamo, la dirección y los documentos adjuntos pertinentes. {site.name} atenderá la petición en un plazo máximo de quince (15) días hábiles, contados a partir de la recepción de la misma.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Seguridad de la Información</h2>
          <p>
            {site.name} ha adoptado las medidas técnicas, humanas y administrativas necesarias para garantizar la seguridad de los datos personales, previniendo su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Vigencia</h2>
          <p>
            La presente política rige a partir de la fecha de su publicación en este sitio web. Las bases de datos tendrán una vigencia igual al tiempo en que se mantenga y utilice la información para las finalidades descritas en esta política.
          </p>
        </div>
      </Container>
    </section>
  );
}


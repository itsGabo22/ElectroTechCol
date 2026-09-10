import { Container } from "@/components/ui/Container";
import { site } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad y Datos",
  description: `Política de Tratamiento de Datos Personales de ${site.name} conforme a la Ley 1581 de 2012.`,
};

export default function DataPolicyPage() {
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
            Los datos personales recopilados a través de nuestro sitio web, formularios de contacto, o canales de atención serán utilizados para las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
            <li>Dar respuesta a solicitudes de cotización, diagnóstico o información técnica de nuestros servicios.</li>
            <li>Coordinar visitas técnicas, mantenimiento de equipos y desarrollo de proyectos electromecánicos y de automatización.</li>
            <li>Gestión administrativa, contable, de facturación y soporte post-venta.</li>
            <li>Evaluar la calidad de nuestros servicios y enviar información sobre innovaciones técnicas que puedan ser de interés.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Derechos de los Titulares</h2>
          <p>
            Como titular de los datos personales, usted tiene los siguientes derechos:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
            <li>Conocer, actualizar y rectificar sus datos personales frente a los Responsables del Tratamiento o Encargados del Tratamiento.</li>
            <li>Solicitar prueba de la autorización otorgada al Responsable del Tratamiento salvo cuando expresamente se exceptúe como requisito para el Tratamiento.</li>
            <li>Ser informado por el Responsable del Tratamiento o el Encargado del Tratamiento, previa solicitud, respecto del uso que le ha dado a sus datos personales.</li>
            <li>Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la presente ley y las demás normas que la modifiquen, adicionen o complementen.</li>
            <li>Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Procedimiento para Consultas y Reclamos</h2>
          <p>
            Los titulares de la información podrán ejercer sus derechos a través de una solicitud escrita enviada al correo electrónico <strong className="text-slate-900">{site.email}</strong>. La solicitud debe incluir la identificación del titular, la descripción de los hechos que dan lugar al reclamo, la dirección y los documentos que se quiera hacer valer.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Vigencia de la Política y Bases de Datos</h2>
          <p>
            La presente Política rige a partir de su publicación en el sitio web <strong className="text-slate-900">{site.domain}</strong>. Las bases de datos tendrán una vigencia igual al tiempo en que se mantenga y utilice la información para las finalidades descritas.
          </p>
        </div>
      </Container>
    </section>
  );
}


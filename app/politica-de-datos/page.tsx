import { Container } from "@/components/ui/Container";
import { site } from "@/lib/constants";

export const metadata = {
  title: "Política de Datos",
  description: "Política de tratamiento de datos personales de ElectroTech.",
};

export default function DataPolicyPage() {
  return (
    <section className="bg-technical-white pb-20 pt-32">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-black text-anthracite">Política de Datos</h1>
        <div className="mt-8 space-y-5 rounded-xl bg-white p-6 leading-7 text-anthracite/75 shadow-soft">
          <p>{site.name} usa los datos enviados por formularios o canales de contacto únicamente para responder solicitudes comerciales, técnicas o de soporte.</p>
          <p>La información podrá incluir nombre, correo, teléfono y mensaje técnico relacionado con el servicio solicitado.</p>
          <p>Para consultas sobre tratamiento de datos, escribe a {site.email}.</p>
        </div>
      </Container>
    </section>
  );
}

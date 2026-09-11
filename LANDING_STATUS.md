# ElectroTech Landing Page - Contexto y Estado del Proyecto (Actualizado)

## Resumen Ejecutivo

La landing page de **ElectroTech** es una aplicación web moderna, dinámica y escalable construida con **Next.js 15 (App Router)**. Actualmente, el proyecto se encuentra **100% desarrollado y en producción**, desplegado en **Vercel** bajo el dominio oficial **electrotechpasto.com**.

El sitio no solo funciona como un escaparate comercial con animaciones y diseño industrial, sino que incluye un **gestor de contenido (Sanity CMS)** para el portafolio y un sistema de correos integrado con **Resend** para la captación de clientes.

---

## 1. Infraestructura y Despliegue

*   **Dominio Oficial:** `electrotechpasto.com` (Registrado y gestionado en Hostinger).
*   **Hosting Web:** **Vercel** (Conectado vía GitHub y DNS apuntando desde Hostinger mediante registros A y CNAME).
    *   *Estado:* ✅ **Activo y En línea**.
*   **Correo Entrante:** `contacto@electrotechpasto.com`.
    *   *Estado:* ✅ **Activo**. (Registros MX y TXT/SPF intactos en Hostinger; bandeja habilitada para recibir correos).
*   **Correo Saliente (Formulario Web):** **Resend API**.
    *   *Estado:* ⏳ **Pendiente de Propagación DNS**. (Registros agregados en Hostinger; en espera de que Resend cambie el estado a "Verified" para evitar caer en Spam).

---

## 2. Stack Tecnológico

*   **Framework Core:** Next.js 15 (React 19, TypeScript Estricto).
*   **Estilos y UI:** Tailwind CSS, Framer Motion (Animaciones fluidas y scroll parallax).
*   **CMS (Gestor de Contenido):** Sanity v3.
*   **Mailing:** Resend API (vía Serverless Route Handlers en Next.js).
*   **Iconografía:** Lucide React.
*   **Tipografía e Imágenes:** `next/font` y `next/image` (con optimización de formatos pesados a JPG).

---

## 3. Arquitectura de Contenido y Secciones

El diseño sigue una estética industrial (Azul industrial, Antracita, Naranja eléctrico):

1.  **Header:** Navegación sticky, CTA y menú responsive.
2.  **Hero:** Copy comercial, CTAs y un background dinámico interactivo con efecto *parallax* ligado al scroll.
3.  **TrustBar:** Métricas de confianza.
4.  **Servicios y Especialidades Técnicas:** Catálogo de servicios.
5.  **Por Qué Elegirnos y Proceso de Trabajo:** Flujo metodológico.
6.  **Portafolio (Dinámico):** Renderiza proyectos obtenidos directamente desde Sanity CMS.
7.  **Testimonios y Garantías:** Slider y listado de confianza.
8.  **FAQ:** Acordeón de preguntas frecuentes.
9.  **Contacto:** Formulario validado conectado a la API de Resend.
10. **Páginas Legales:** Aviso Legal y Política de Tratamiento de Datos (Ajustados a la Ley 1581 de 2012 de Colombia).

---

## 4. Gestión del Portafolio (Sanity CMS)

El portafolio de proyectos dejó de ser estático y ahora es **dinámico**.
*   Los datos se obtienen mediante *GROQ* desde la API de Sanity.
*   **Importante sobre el Studio:** Debido a una incompatibilidad temporal de dependencias entre *Sanity UI* y *React 19* (incluido en Next 15), la ruta `/studio` está deshabilitada en producción para evitar que el *build* falle en Vercel.
*   **¿Cómo agregar proyectos?** El administrador debe correr el CMS localmente ejecutando `npx sanity start` en la terminal, lo cual abrirá el panel de control en `localhost:3333` conectado a la misma base de datos en la nube.

---

## 5. SEO y Optimizaciones

*   **Metadata:** Etiquetas Open Graph, Títulos y Descripciones dinámicas cargadas desde `lib/constants.ts`.
*   **JSON-LD:** Se inyectó un schema de tipo `LocalBusiness` en el `layout.tsx` para mejorar el posicionamiento en Google Maps y búsquedas locales en Pasto.
*   **Rutas estáticas:** `sitemap.xml` y `robots.txt` configurados correctamente apuntando a `https://electrotechpasto.com`.
*   **Performance:** Uso intensivo de Server Components y optimización de imágenes.

---

## 6. Próximos Pasos Recomendados

1.  **Verificar Resend:** Monitorear el panel de Resend hasta que los DNS verifiquen el dominio, y luego hacer una prueba real enviando un mensaje desde el formulario web para confirmar que llegue a `contacto@electrotechpasto.com`.
2.  **Llenar el Portafolio:** Recopilar fotos y descripciones de trabajos reales, arrancar Sanity localmente (`npx sanity start`) y comenzar a crear documentos de tipo "Proyecto" para que se reflejen en la web.
3.  **Monitoreo SEO:** Registrar el dominio en **Google Search Console** utilizando el sitemap autogenerado.

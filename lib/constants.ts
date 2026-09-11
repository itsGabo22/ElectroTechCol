import type {
  FaqItem,
  Guarantee,
  NavItem,
  ProcessStep,
  Service,
  Specialty,
  Testimonial,
  TrustMetric,
  ValueProp,
} from "@/types";

export const site = {
  name: "ElectroTech",
  domain: "https://electrotech.com.co",
  description:
    "Soluciones de electromecánica, automatización industrial, tableros eléctricos, energía de respaldo y mantenimiento para industria y hogar en Colombia.",
  phone: "+57 317 745 7774",
  email: "contacto@electrotech.com.co",
  location: "Colombia",
  whatsapp: "573177457774",
  social: {
    linkedin: "https://www.linkedin.com/company/electrotech",
    instagram: "https://www.instagram.com/electrotech",
  },
} as const;

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Garantías", href: "#garantias" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export const heroContent = {
  eyebrow: "Electromecánica y automatización industrial",
  title: "Ingeniería de precisión para sistemas eléctricos y automatizados",
  description:
    "Diseñamos, implementamos y mantenemos soluciones confiables para industria y hogar: tableros eléctricos, control, ATS, respaldo energético y automatización.",
  primaryCta: "Cotizar Ahora",
  secondaryCta: "Conoce Nuestros Servicios",
  imageAlt:
    "Tablero eléctrico industrial y brazo robótico en una planta moderna de automatización",
} as const;

export const trustMetrics: TrustMetric[] = [
  { value: "10+", label: "años de experiencia técnica" },
  { value: "120+", label: "proyectos ejecutados" },
  { value: "24h", label: "respuesta inicial prioritaria" },
  { value: "45+", label: "clientes atendidos" },
];

export const sectionHeadings = {
  services: {
    eyebrow: "Servicios",
    title: "Soluciones electromecánicas de extremo a extremo",
    description:
      "Integramos ingeniería eléctrica, automatización y mantenimiento para sistemas seguros, eficientes y preparados para crecer.",
  },
  specialties: {
    eyebrow: "Especialidades",
    title: "Capacidades técnicas para operación crítica",
    description:
      "Priorizamos precisión, orden eléctrico y continuidad para equipos, procesos y espacios con exigencia real.",
  },
  whyUs: {
    eyebrow: "Por qué elegirnos",
    title: "Criterio técnico, respuesta clara y ejecución responsable",
    description:
      "Trabajamos con enfoque de ingeniería, comunicación transparente y soporte posterior a la entrega.",
  },
  process: {
    eyebrow: "Proceso",
    title: "Un método claro desde el diagnóstico hasta el soporte",
    description:
      "Cada proyecto avanza con levantamiento técnico, diseño, ejecución validada y acompañamiento posterior.",
  },
  guarantees: {
    eyebrow: "Garantías",
    title: "Respaldo técnico para instalaciones confiables",
    description:
      "Documentamos, probamos y acompañamos nuestras soluciones para que el resultado sea mantenible y seguro.",
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Confianza construida con ejecución técnica",
    description:
      "Referencias representativas de clientes que han requerido continuidad, orden y soporte especializado.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    description:
      "Respuestas rápidas para entender cómo trabajamos en electromecánica, automatización y soporte.",
  },
} as const;

export const services: Service[] = [
  {
    title: "Electromecánica",
    description: "Integración, diagnóstico y puesta a punto de sistemas eléctricos y mecánicos.",
    icon: "bolt",
  },
  {
    title: "Automatización Industrial",
    description: "Control de procesos, sensores, actuadores y lógica para operaciones más eficientes.",
    icon: "cpu",
  },
  {
    title: "Tableros Eléctricos",
    description: "Diseño y fabricación de tableros de potencia, control y distribución.",
    icon: "panel",
  },
  {
    title: "Sistemas de Control",
    description: "Arquitecturas de control robustas para máquinas, líneas y equipos críticos.",
    icon: "settings",
  },
  {
    title: "Transferencias Automáticas ATS",
    description: "Sistemas de conmutación segura entre red eléctrica y plantas de respaldo.",
    icon: "repeat",
  },
  {
    title: "Energía de Respaldo",
    description: "Soluciones para continuidad operativa con plantas, UPS y protecciones.",
    icon: "battery",
  },
  {
    title: "Energías Renovables",
    description: "Integración eléctrica para soluciones solares y sistemas energéticos híbridos.",
    icon: "sun",
  },
  {
    title: "Mantenimiento Electromecánico",
    description: "Planes preventivos y correctivos para reducir fallas y tiempos muertos.",
    icon: "wrench",
  },
];

export const specialties: Specialty[] = [
  {
    title: "Automatización Industrial",
    description:
      "Mejoramos ciclos productivos con control, instrumentación e integración eléctrica confiable.",
    metric: "Procesos más estables",
    icon: "cpu",
  },
  {
    title: "Sistemas de Transferencia ATS",
    description:
      "Diseñamos transferencias automáticas para continuidad energética en cargas críticas.",
    metric: "Continuidad operacional",
    icon: "repeat",
  },
  {
    title: "Mantenimiento Preventivo y Correctivo",
    description:
      "Inspección, medición, reparación y mejora de equipos electromecánicos.",
    metric: "Menos paradas no programadas",
    icon: "wrench",
  },
  {
    title: "Tableros de Control y Potencia",
    description:
      "Fabricación organizada, documentada y preparada para operación y soporte.",
    metric: "Instalaciones claras y seguras",
    icon: "panel",
  },
];

export const valueProps: ValueProp[] = [
  {
    title: "Confiabilidad",
    description: "Soluciones calculadas para operar de forma estable en ambientes exigentes.",
    icon: "shield",
  },
  {
    title: "Equipo Experto",
    description: "Criterio técnico en diseño, instalación, diagnóstico y puesta en marcha.",
    icon: "users",
  },
  {
    title: "Soporte Rápido",
    description: "Atención prioritaria para fallas críticas y continuidad operacional.",
    icon: "timer",
  },
  {
    title: "Respaldo y Garantía",
    description: "Documentación, garantía de servicio y acompañamiento posterior.",
    icon: "check",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Diagnóstico",
    description: "Levantamos necesidades, riesgos eléctricos y condiciones reales de operación.",
  },
  {
    title: "Diseño",
    description: "Definimos arquitectura, componentes, protecciones y alcance técnico.",
  },
  {
    title: "Implementación",
    description: "Instalamos, configuramos, probamos y entregamos el sistema en sitio.",
  },
  {
    title: "Soporte",
    description: "Acompañamos la operación con mantenimiento, mejoras y respuesta técnica.",
  },
];

export const portfolioContent = {
  title: "Casos de Éxito / Portafolio",
  description:
    "Cada proyecto se documentará con alcance, categoría, imagen, descripción y año para mantener un portafolio técnico y verificable.",
  emptyTitle: "Próximamente",
  emptyText: "Estamos documentando nuestros proyectos más recientes.",
  emptyCta: "Hablemos de tu proyecto",
} as const;

export const guarantees: Guarantee[] = [
  {
    title: "Garantía de instalación",
    description: "Cobertura técnica sobre trabajos ejecutados, con términos definidos por alcance.",
    icon: "shield",
  },
  {
    title: "Cumplimiento normativo",
    description: "Diseños e instalaciones alineados con criterios eléctricos aplicables en Colombia.",
    icon: "file",
  },
  {
    title: "Pruebas y entrega",
    description: "Validaciones funcionales, revisión de protecciones y entrega documentada.",
    icon: "check",
  },
  {
    title: "Soporte post-venta",
    description: "Acompañamiento posterior para ajustes, mantenimiento y continuidad del servicio.",
    icon: "message",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "ElectroTech nos ayudó a estabilizar el sistema de transferencia y a reducir riesgos en operación crítica.",
    name: "Andrés Moreno",
    company: "Gerente de Operaciones",
    avatar: "AM",
  },
  {
    quote:
      "El tablero quedó ordenado, documentado y listo para mantenimiento. La entrega fue muy profesional.",
    name: "Laura Sánchez",
    company: "Coordinadora de Mantenimiento",
    avatar: "LS",
  },
  {
    quote:
      "Respondieron rápido, diagnosticaron la falla y dejaron recomendaciones claras para evitar recurrencias.",
    name: "Carlos Pérez",
    company: "Administrador de Planta",
    avatar: "CP",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "¿Trabajan solo con industria o también con hogares?",
    answer:
      "Atendemos ambos frentes. En industria cubrimos automatización, control, tableros y mantenimiento; en hogar trabajamos respaldo energético, transferencias, adecuaciones y soluciones eléctricas especializadas.",
  },
  {
    question: "¿Diseñan y fabrican tableros eléctricos?",
    answer:
      "Sí. Podemos diseñar, ensamblar, instalar y entregar tableros de potencia, control y distribución según el alcance técnico requerido.",
  },
  {
    question: "¿Qué incluye un sistema ATS?",
    answer:
      "Incluye análisis de carga, selección de componentes, tablero de transferencia, protecciones, pruebas de conmutación y recomendaciones de operación.",
  },
  {
    question: "¿Realizan mantenimiento preventivo?",
    answer:
      "Sí. Definimos planes según criticidad, condiciones de operación y estado de los equipos para reducir fallas y paradas no programadas.",
  },
  {
    question: "¿Pueden atender emergencias?",
    answer:
      "Podemos priorizar fallas críticas y coordinar una revisión inicial para definir acciones correctivas según disponibilidad y ubicación.",
  },
  {
    question: "¿Cómo se solicita una cotización?",
    answer:
      "Puedes enviar el formulario, escribir por WhatsApp o contactar por correo. Mientras más datos técnicos compartas, más precisa será la propuesta.",
  },
];

export const contactContent = {
  title: "Hablemos de tu proyecto",
  description:
    "Cuéntanos qué necesitas resolver. Revisaremos el alcance técnico y te contactaremos para avanzar con una cotización.",
  privacy:
    "Al enviar este formulario autorizas el tratamiento de tus datos personales para responder tu solicitud, de acuerdo con nuestra Política de Datos.",
  fields: {
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    message: "Mensaje",
  },
  submit: "Enviar solicitud",
  success: "Solicitud enviada. Te contactaremos pronto.",
  error: "No fue posible enviar la solicitud. Intenta nuevamente.",
} as const;

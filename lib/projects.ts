import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "p1",
    title: "Implementación ATS y Respaldo",
    category: "Transferencias Automáticas",
    image: "/hero-ats-panel.jpg",
    description: "Diseño e instalación de sistema de transferencia automática con planta de respaldo de 500kVA para centro de datos.",
    year: "2023",
  },
  {
    id: "p2",
    title: "Adecuación Energética Híbrida",
    category: "Energías Renovables",
    image: "/hero-solar-field.jpg",
    description: "Integración de granja solar con red eléctrica principal y sistemas de almacenamiento para reducción de consumo.",
    year: "2024",
  },
  {
    id: "p3",
    title: "Mantenimiento Preventivo Subestación",
    category: "Mantenimiento",
    image: "/hero-energy-site.jpg",
    description: "Ejecución de plan de mantenimiento preventivo y correctivo en subestación eléctrica de media tensión.",
    year: "2025",
  },
];

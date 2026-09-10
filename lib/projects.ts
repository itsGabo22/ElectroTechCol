import { groq } from "next-sanity";
import { client } from "./sanity/client";
import type { Project } from "@/types";

// Mock data to simulate a successful Sanity fetch when credentials are not present
const MOCK_PROJECTS: Project[] = [
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

export async function getProjects(): Promise<Project[]> {
  // If no project ID is configured, return the mock data to simulate successful fetch
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    // For testing empty state, you can return [] here.
    return MOCK_PROJECTS;
  }

  // Strict GROQ query to project Sanity fields into our exact TypeScript interface shape.
  // Resolves the image URL directly inside GROQ using `image.asset->url`.
  const query = groq`*[_type == "project"] | order(year desc) {
    "id": _id,
    title,
    category,
    "image": image.asset->url,
    description,
    year
  }`;

  return client.fetch<Project[]>(query);
}

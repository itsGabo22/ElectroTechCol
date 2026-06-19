"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent("Hola ElectroTech, quiero cotizar una solución electromecánica o de automatización.");
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-electric-orange text-white shadow-lg shadow-electric-orange/30 transition hover:-translate-y-1 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-orange active:scale-95"
    >
      <MessageCircle aria-hidden className="h-7 w-7" />
    </a>
  );
}

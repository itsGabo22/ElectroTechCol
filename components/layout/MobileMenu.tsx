"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/constants";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
      >
        {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
      </button>
      <div
        className={`absolute left-5 right-5 top-20 overflow-hidden rounded-xl border border-white/15 bg-anthracite/95 shadow-soft backdrop-blur transition-all duration-300 ${
          open ? "max-h-[440px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Navegación móvil" className="grid gap-1 p-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-electric-orange px-4 py-3 text-center text-sm font-bold text-white"
          >
            Cotizar Ahora
          </Link>
        </nav>
      </div>
    </div>
  );
}

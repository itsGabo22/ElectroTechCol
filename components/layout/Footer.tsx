import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-anthracite py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black">{site.name}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/70">{site.description}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/50">Links rápidos</p>
            <div className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/50">Legal</p>
            <div className="mt-4 grid gap-2 text-sm text-white/75">
              <Link href="/aviso-legal" className="transition hover:text-white">
                Aviso legal
              </Link>
              <Link href="/politica-de-datos" className="transition hover:text-white">
                Política de datos
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems, site } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="site-header fixed left-0 right-0 top-0 z-50 border-b border-white/15">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity" aria-label="ElectroTech inicio">
          <Logo className="h-12 w-auto text-white" />
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-white/90 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/#contacto" className="min-h-10 px-4 py-2">
            Cotizar Ahora
          </Button>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}

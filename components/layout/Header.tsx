import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems, site } from "@/lib/constants";

export function Header() {
  return (
    <header className="site-header fixed left-0 right-0 top-0 z-50 border-b border-white/15">
      <Container className="flex h-20 items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-2" aria-label="ElectroTech inicio">
          <div className="bg-white/95 p-1.5 rounded-lg flex items-center justify-center shadow-sm">
            <Image 
              src="/logo-electrotech.png" 
              alt="ElectroTech Logo" 
              width={160} 
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-white/90 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#contacto" className="min-h-10 px-4 py-2">
            Cotizar Ahora
          </Button>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}

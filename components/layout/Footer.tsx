import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-anthracite py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center text-white">
              <Logo className="h-16 w-auto text-white" />
            </div>
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
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </div>
          
          {/* Vicar Branding Watermark */}
          <div className="vicar-branding mt-2 cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 sm:mt-0">
            <a
              href="https://vicardev.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-inherit no-underline"
            >
              <span className="text-[0.7rem] uppercase tracking-[2px] text-[#888]">
                Developed by
              </span>
              <svg
                width="130"
                height="40"
                viewBox="0 0 320 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-[160px]"
              >
                <defs>
                  <linearGradient id="techGradientVicar" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path
                  d="M15 20 L45 50 L15 80"
                  stroke="url(#techGradientVicar)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text
                  x="55"
                  y="75"
                  fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  fontWeight="800"
                  fontSize="60"
                  fill="currentColor"
                  letterSpacing="-2"
                >
                  VICAR
                </text>
                <rect
                  x="275"
                  y="20"
                  width="8"
                  height="60"
                  transform="rotate(20 275 50)"
                  fill="url(#techGradientVicar)"
                  rx="4"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

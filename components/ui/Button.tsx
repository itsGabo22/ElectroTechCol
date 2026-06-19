import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-electric-orange text-white shadow-lg shadow-electric-orange/25 hover:bg-[#e86f00] focus-visible:outline-electric-orange",
  secondary:
    "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 focus-visible:outline-white",
  ghost:
    "border border-industrial-blue/15 bg-white text-industrial-blue hover:border-industrial-blue/35 hover:bg-technical-white focus-visible:outline-industrial-blue",
};

export function Button({ href, children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 hover:scale-[1.015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.985]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

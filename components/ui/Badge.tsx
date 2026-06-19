import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "light" | "dark";
};

export function Badge({ children, tone = "light" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]",
        tone === "light" ? "bg-industrial-blue/10 text-industrial-blue" : "bg-white/15 text-white",
      )}
    >
      {children}
    </span>
  );
}

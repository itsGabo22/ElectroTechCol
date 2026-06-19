import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-200", className)}>
      {children}
    </div>
  );
}

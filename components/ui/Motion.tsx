"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, staggerChildren } from "@/lib/animations";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
};

export function MotionReveal({ children, className, stagger = false }: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={stagger ? staggerChildren : fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export const MotionItem = motion.div;

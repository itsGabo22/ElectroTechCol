"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { heroContent } from "@/lib/constants";

export function HeroMedia() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.32], [0, -56]);
  const scale = useTransform(scrollYProgress, [0, 0.32], [1, 1.06]);

  return (
    <motion.div
      className="relative"
      style={{ y: reduceMotion ? 0 : y, scale: reduceMotion ? 1 : scale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/20 bg-anthracite/50 shadow-2xl backdrop-blur-sm">
        <Image
          src="/hero-generator-room.png"
          alt={heroContent.imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite/55 via-transparent to-transparent" />
      </div>
      <div className="absolute -bottom-5 left-6 right-6 rounded-xl border border-white/15 bg-anthracite/90 p-4 shadow-soft backdrop-blur">
        <p className="text-sm font-semibold text-white/90">Control, potencia y continuidad energética en un solo enfoque.</p>
      </div>
    </motion.div>
  );
}

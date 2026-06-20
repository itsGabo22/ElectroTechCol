"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function HeroBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const secondOpacity = useTransform(scrollYProgress, [0, 0.16, 0.34], [0, 0.55, 1]);
  const firstScale = useTransform(scrollYProgress, [0, 0.34], [1, 1.08]);
  const secondScale = useTransform(scrollYProgress, [0, 0.34], [1.08, 1]);

  return (
    <div aria-hidden className="absolute inset-0">
      <motion.div className="absolute inset-0" style={{ scale: reduceMotion ? 1 : firstScale }}>
        <Image
          src="/hero-energy-site.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        style={{ opacity: reduceMotion ? 0.45 : secondOpacity, scale: reduceMotion ? 1 : secondScale }}
      >
        <Image
          src="/hero-generator-room.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-anthracite/95 via-industrial-blue/80 to-anthracite/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/90 via-transparent to-anthracite/30" />
    </div>
  );
}

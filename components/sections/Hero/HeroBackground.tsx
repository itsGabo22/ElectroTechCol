"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type HeroBackgroundImage = {
  src: string;
  alt: string;
  opacityRange: [number, number, number] | [number, number];
  opacityValue: [number, number, number] | [number, number];
  priority?: boolean;
  position: string;
};

const backgroundImages: HeroBackgroundImage[] = [
  {
    src: "/hero-energy-site.jpg",
    alt: "Sistema de respaldo energético con paneles solares al atardecer",
    opacityRange: [0, 180],
    opacityValue: [1, 0],
    priority: true,
    position: "object-center",
  },
  {
    src: "/hero-generator-room.jpg",
    alt: "Sala técnica con generador industrial y tablero de control",
    opacityRange: [90, 260, 430],
    opacityValue: [0, 1, 0],
    position: "object-center",
  },
  {
    src: "/hero-smart-energy.jpg",
    alt: "Infraestructura energetica con ciudad, paneles solares, tableros y generador",
    opacityRange: [340, 520, 700],
    opacityValue: [0, 1, 0],
    position: "object-center",
  },
  {
    src: "/hero-solar-field.jpg",
    alt: "Campo solar industrial con montañas y luz de atardecer",
    opacityRange: [610, 820],
    opacityValue: [0, 1],
    position: "object-center",
  },
];

function BackgroundLayer({ image, index }: { image: HeroBackgroundImage; index: number }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, image.opacityRange, image.opacityValue);
  const y = useTransform(scrollY, [0, 820], [index * -8, -72 + index * 10]);
  const scale = useTransform(scrollY, [0, 820], [1.04, 1.1]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        opacity: reduceMotion ? (index === 0 ? 1 : 0) : opacity,
        y: reduceMotion ? 0 : y,
        scale: reduceMotion ? 1 : scale,
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={image.priority}
        quality={82}
        sizes="100vw"
        className={`object-cover ${image.position}`}
      />
    </motion.div>
  );
}

export function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0">
      {backgroundImages.map((image, index) => (
        <BackgroundLayer key={image.src} image={image} index={index} />
      ))}
      {/* Lower these overlay opacity values to make the backgrounds more visible. */}
      <div className="absolute inset-0 bg-gradient-to-r from-anthracite/82 via-industrial-blue/45 to-anthracite/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/72 via-transparent to-anthracite/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_44%,rgba(12,24,36,0.78)_0%,rgba(12,24,36,0.48)_34%,rgba(12,24,36,0.08)_62%,transparent_78%)]" />
    </div>
  );
}

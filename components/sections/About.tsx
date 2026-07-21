"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/lib/content";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="sobre" ref={ref} className="relative overflow-hidden py-28">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 opacity-40">
        <PlaceholderImage
          alt="Interior da barbearia R.J.Cabeleireiros"
          className="h-full w-full"
        />
      </motion.div>
      <div className="from-background via-background/70 absolute inset-0 -z-10 bg-gradient-to-t to-transparent" />

      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Sobre nós"
          title="Tradição de barbearia, olho de detalhe"
          description="Na Rua D. Pedro V, em Trofa, cuidamos de cada corte com a mesma atenção — do primeiro à última cliente."
        />

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3">
          <AnimatedCounter
            value={siteContent.social.followers}
            suffix="+"
            label="Seguidores"
          />
          <AnimatedCounter
            value={siteContent.social.recommendPercent}
            suffix="%"
            label="Recomendam"
          />
          <AnimatedCounter
            value={siteContent.social.reviewCount}
            label="Críticas"
            suffix=""
          />
        </div>
      </div>
    </section>
  );
}

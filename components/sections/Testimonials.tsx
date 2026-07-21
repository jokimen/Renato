"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const { testimonials, social } = siteContent;
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section id="testemunhos" className="mx-auto max-w-3xl px-6 py-28">
      <SectionHeading
        eyebrow="Testemunhos"
        title={`${social.recommendPercent}% recomendam`}
        description={`Com base em ${social.reviewCount} críticas no Facebook.`}
      />

      <div className="relative flex items-center gap-4">
        <button
          type="button"
          aria-label="Testemunho anterior"
          onClick={prev}
          className="border-border hover:border-gold-500 hover:text-gold-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="bg-surface border-border relative min-h-[180px] flex-1 overflow-hidden rounded-2xl border p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 30, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -30, rotateY: -15 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="mb-3 flex justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold-500 text-gold-500"
                  />
                ))}
              </div>
              <p className="font-display text-lg text-balance">
                “{current.quote}”
              </p>
              <p className="text-foreground/60 mt-4 text-sm">
                — {current.author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          aria-label="Próximo testemunho"
          onClick={next}
          className="border-border hover:border-gold-500 hover:text-gold-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

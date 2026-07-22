"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

// lucide-react dropped brand/logo icons — small inline mark instead.
function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.08.72-2.45 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54v-3.1H1.27a12 12 0 0 0 0 10.75l4-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.27 6.63l4 3.1C6.22 6.88 8.87 4.77 12 4.77Z"
      />
    </svg>
  );
}

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
        eyebrow="Google Reviews"
        title={`${social.googleRating} ★ no Google`}
        description={`Baseado em ${social.googleReviewCount} críticas reais no Google.`}
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

        <div className="bg-surface border-border relative min-h-[220px] flex-1 overflow-x-hidden rounded-2xl border p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 30, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -30, rotateY: -15 }}
              transition={{ duration: 0.4 }}
              className="flex h-full flex-col items-center justify-center text-center"
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
              <div className="text-foreground/40 mt-3 flex items-center gap-1.5 text-xs">
                <GoogleIcon />
                Avaliação no Google
              </div>
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

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.id}
            type="button"
            aria-label={`Ver testemunho ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "bg-gold-500 w-6" : "bg-border w-1.5",
            )}
          />
        ))}
      </div>
    </section>
  );
}

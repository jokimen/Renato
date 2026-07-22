"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCalendlyEmbedUrl } from "@/lib/calendly";

const MAX_POLL_ATTEMPTS = 25;

export function Booking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  // widget.js loads asynchronously from the root layout — poll briefly
  // for it rather than coupling this component to the <Script> instance.
  useEffect(() => {
    let attempts = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    function check() {
      if (window.Calendly) {
        setReady(true);
        if (interval) clearInterval(interval);
        return true;
      }
      return false;
    }

    const timeout = setTimeout(() => {
      if (check()) return;
      interval = setInterval(() => {
        attempts += 1;
        if (check() || attempts >= MAX_POLL_ATTEMPTS) {
          clearInterval(interval);
        }
      }, 200);
    }, 0);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (ready && containerRef.current) {
      window.Calendly?.initInlineWidget({
        url: getCalendlyEmbedUrl(),
        parentElement: containerRef.current,
      });
    }
  }, [ready]);

  return (
    <section id="marcacoes" className="mx-auto max-w-4xl px-6 py-28">
      <SectionHeading
        eyebrow="Marcações"
        title="Reserve o seu horário"
        description="Escolha o dia e a hora que melhor lhe convêm — confirmação imediata."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-border bg-surface relative min-h-[700px] overflow-hidden rounded-2xl border"
      >
        <div ref={containerRef} className="h-full min-h-[700px] w-full" />
        {!ready && (
          <div className="text-foreground/50 absolute inset-0 flex items-center justify-center text-sm">
            A carregar marcações…
          </div>
        )}
      </motion.div>
    </section>
  );
}

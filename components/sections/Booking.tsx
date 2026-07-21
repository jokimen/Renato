"use client";

import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Calendly-shaped placeholder — same footprint a real inline embed will
// occupy, so Fase 2 only needs to swap the inner content.
export function Booking() {
  return (
    <section id="marcacoes" className="mx-auto max-w-4xl px-6 py-28">
      <SectionHeading
        eyebrow="Marcações"
        title="Reserve o seu horário"
        description="Marcações online chegam em breve — por agora, ligue-nos diretamente."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-border bg-surface flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border p-10 text-center"
      >
        <CalendarClock className="text-gold-500" size={40} />
        <p className="font-display text-xl">
          Marcações via Calendly — brevemente
        </p>
        <p className="text-foreground/60 max-w-sm text-sm">
          Estamos a preparar o sistema de marcações online. Entretanto,
          contacte-nos por telefone.
        </p>
      </motion.div>
    </section>
  );
}

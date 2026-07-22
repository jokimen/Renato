"use client";

import { motion } from "framer-motion";
import { CalendarClock, Phone } from "lucide-react";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];
// Purely illustrative pattern — not real availability data.
const AVAILABLE_DAYS = new Set([2, 5, 8, 9, 12, 15, 16, 19, 22, 23, 26, 29]);
const SAMPLE_TIMES = ["09:30", "11:00", "14:30", "16:00"];

// Stylised mock of the booking calendar — NOT a real screenshot or real
// availability — shown while the client finishes setting up their
// Calendly account (Event Type + connected calendar). Swap back to
// <CalendlyEmbed /> in Booking.tsx once that's done.
export function BookingPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-border bg-surface relative overflow-hidden rounded-2xl border p-8"
    >
      <div className="border-gold-500/40 bg-gold-500/10 text-gold-500 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
        <CalendarClock size={14} />
        Pré-visualização — marcações online chegam brevemente
      </div>

      <div className="mx-auto max-w-sm">
        <p className="font-display mb-4 text-center text-lg">Julho 2026</p>

        <div className="grid grid-cols-7 gap-2 text-center">
          {WEEKDAYS.map((day, i) => (
            <span
              key={i}
              className="text-foreground/40 text-xs font-semibold uppercase"
            >
              {day}
            </span>
          ))}
          {Array.from({ length: 31 }).map((_, i) => {
            const day = i + 1;
            const available = AVAILABLE_DAYS.has(day);
            return (
              <div
                key={day}
                className={cn(
                  "flex aspect-square items-center justify-center rounded-full text-sm",
                  available
                    ? "bg-gold-500/15 text-gold-500 border-gold-500/50 border"
                    : "text-foreground/25",
                )}
              >
                {day}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {SAMPLE_TIMES.map((time) => (
            <span
              key={time}
              className="border-border text-foreground/40 rounded-full border px-3 py-1 text-xs"
            >
              {time}
            </span>
          ))}
        </div>
      </div>

      <div className="border-border mt-8 flex flex-col items-center gap-2 border-t pt-6 text-center">
        <p className="text-foreground/60 max-w-sm text-sm">
          Entretanto, contacte-nos diretamente para marcar.
        </p>
        <a
          href={`tel:${siteContent.phone}`}
          className="text-gold-500 inline-flex items-center gap-2 font-semibold"
        >
          <Phone size={16} />
          {siteContent.phoneDisplay}
        </a>
      </div>
    </motion.div>
  );
}

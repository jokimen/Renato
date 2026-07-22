"use client";

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { getCalendlyEmbedUrl } from "@/lib/calendly";

// Persistent booking CTA (plan: "Botão flutuante 'Marcar' sempre
// visível") — opens Calendly's popup widget instantly from anywhere
// on the page, regardless of scroll position.
export function FloatingBookButton() {
  function openBooking() {
    window.Calendly?.initPopupWidget({ url: getCalendlyEmbedUrl() });
  }

  return (
    <motion.button
      type="button"
      onClick={openBooking}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gold-500 hover:bg-gold-400 shadow-gold-500/40 fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-black shadow-lg transition-colors sm:right-6 sm:bottom-6"
    >
      <CalendarCheck size={18} />
      <span className="hidden sm:inline">Marcar</span>
    </motion.button>
  );
}

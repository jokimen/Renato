"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, X } from "lucide-react";
import { useState } from "react";
import { CALENDLY_READY, getCalendlyEmbedUrl } from "@/lib/calendly";
import { BookingPreview } from "@/components/sections/BookingPreview";

// Persistent booking CTA (plan: "Botão flutuante 'Marcar' sempre
// visível"). Opens Calendly's real popup widget once the account is
// ready; until then, opens the same floating window but with the
// booking preview instead of Calendly's "No openings at the moment".
export function FloatingBookButton() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (CALENDLY_READY) {
      window.Calendly?.initPopupWidget({ url: getCalendlyEmbedUrl() });
      return;
    }
    setOpen(true);
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={handleClick}
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          >
            <button
              aria-label="Fechar"
              className="absolute top-6 right-6 text-white"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto"
            >
              <BookingPreview />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

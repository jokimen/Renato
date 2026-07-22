"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// lucide-react has no WhatsApp icon — hand-drawn to match the real mark.
function WhatsAppIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.9-2.2-.24-.58-.48-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.06 2.86 1.21 3.06.15.2 2.09 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.01 2C6.49 2 2 6.48 2 11.99c0 1.94.55 3.75 1.5 5.29L2 22l4.87-1.47a10 10 0 0 0 5.14 1.4h.01c5.51 0 10-4.48 10-9.99C22 6.48 17.52 2 12.01 2Zm0 18.15h-.01a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.09.93.93-3.01-.19-.31a8.14 8.14 0 0 1-1.26-4.35c0-4.5 3.67-8.17 8.19-8.17 2.19 0 4.24.85 5.79 2.4a8.11 8.11 0 0 1 2.4 5.78c0 4.5-3.68 8.05-8.3 8.05Z" />
    </svg>
  );
}

// Persistent WhatsApp contact CTA, bottom-left (mirrors the booking
// button on bottom-right) — opens a pre-filled chat to the salon's
// real WhatsApp number.
export function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar via WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#20bd5a] sm:bottom-6 sm:left-6"
    >
      <WhatsAppIcon />
    </motion.a>
  );
}

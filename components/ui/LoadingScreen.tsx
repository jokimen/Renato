"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteContent } from "@/lib/content";

const SESSION_KEY = "rj-loading-shown";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) return;

    sessionStorage.setItem(SESSION_KEY, "1");
    const raf = requestAnimationFrame(() => setVisible(true));
    const timeout = setTimeout(() => setVisible(false), 1200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-background fixed inset-0 z-[100] flex items-center justify-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.8 }}
            className="text-gold-500 font-display text-xl uppercase"
          >
            {siteContent.businessName}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

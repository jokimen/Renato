"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

export function CustomCursor() {
  const enabled = useMediaQuery("(pointer: fine)");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (!enabled) return;
    function handleMove(event: MouseEvent) {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ translateX: springX, translateY: springY }}
      className="border-gold-500 pointer-events-none fixed top-0 left-0 z-[90] h-5 w-5 rounded-full border mix-blend-difference"
    />
  );
}

"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ConflictingProps =
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd";

interface ButtonProps extends Omit<
  ComponentPropsWithoutRef<"button">,
  ConflictingProps
> {
  variant?: "primary" | "outline";
}

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold tracking-wide uppercase transition-colors",
        variant === "primary" &&
          "bg-gold-500 hover:bg-gold-400 text-black shadow-[0_0_30px_-8px_var(--color-gold-500)]",
        variant === "outline" &&
          "border-border text-foreground hover:border-gold-500 hover:text-gold-500 border",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

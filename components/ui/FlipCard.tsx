"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn("group [perspective:1200px]", className)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        <div
          className="absolute inset-0 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

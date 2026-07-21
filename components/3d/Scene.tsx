"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { HeroShape } from "./HeroShape";

// Skipped entirely on small viewports / reduced-motion preference, per the
// plan's "desativar/simplificar efeitos 3D pesados em mobile" requirement.
export function Scene() {
  const isWideEnough = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  if (!isWideEnough || prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <Suspense fallback={null}>
          <HeroShape />
        </Suspense>
      </Canvas>
    </div>
  );
}

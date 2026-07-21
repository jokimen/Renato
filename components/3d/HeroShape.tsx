"use client";

import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export function HeroShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.32, 180, 24]} />
        <MeshDistortMaterial
          color="#c9a35c"
          metalness={0.7}
          roughness={0.25}
          distort={0.15}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

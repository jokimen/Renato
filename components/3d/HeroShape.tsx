"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

const BLADE_MATERIAL = {
  color: "#d9b876",
  metalness: 0.85,
  roughness: 0.2,
} as const;

const HANDLE_MATERIAL = {
  color: "#c9a35c",
  metalness: 0.8,
  roughness: 0.3,
} as const;

interface ScissorArmProps {
  baseAngle: number;
  swingRef: React.RefObject<Group | null>;
}

function ScissorArm({ baseAngle, swingRef }: ScissorArmProps) {
  return (
    <group ref={swingRef} rotation={[0, 0, baseAngle]}>
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[0.09, 1.3, 0.04]} />
        <meshStandardMaterial {...BLADE_MATERIAL} />
      </mesh>
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.7, 12]} />
        <meshStandardMaterial {...HANDLE_MATERIAL} />
      </mesh>
      <mesh position={[0, -0.78, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.045, 16, 32]} />
        <meshStandardMaterial {...HANDLE_MATERIAL} />
      </mesh>
    </group>
  );
}

// A stylised pair of scissors, in the gold accent tone, with a gentle
// snipping motion — ties the Hero's 3D element back to the hairdresser
// concept instead of an abstract shape.
export function HeroShape() {
  const outerRef = useRef<Group>(null);
  const armARef = useRef<Group>(null);
  const armBRef = useRef<Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.3;
    }

    const snip = Math.sin(t * 1.4) * 0.12;
    if (armARef.current) armARef.current.rotation.z = 0.22 + snip;
    if (armBRef.current) armBRef.current.rotation.z = -0.22 - snip;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={1.1}>
      <group ref={outerRef} rotation={[0.3, 0, 0.1]}>
        <ScissorArm baseAngle={0.22} swingRef={armARef} />
        <ScissorArm baseAngle={-0.22} swingRef={armBRef} />
        <mesh>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color="#f5f1e8"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}

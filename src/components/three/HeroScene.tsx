'use client';

import { AdaptiveDpr, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';
import CanvasScene from '@/components/CanvasScene';

function FloatingCore() {
  const coreRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!coreRef.current) {
      return;
    }

    coreRef.current.rotation.y += delta * 0.22;
    coreRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
  });

  return (
    <group ref={coreRef}>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial color="#ffb88c" metalness={0.35} roughness={0.3} />
        </mesh>
      </Float>
      <mesh scale={1.65}>
        <torusGeometry args={[1, 0.03, 16, 90]} />
        <meshStandardMaterial color="#ffd700" transparent opacity={0.36} />
      </mesh>
    </group>
  );
}

function HeroSceneFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,215,0,0.13),transparent_50%),radial-gradient(circle_at_75%_70%,rgba(255,140,66,0.13),transparent_55%)]"
    />
  );
}

export default function HeroScene() {
  const canRender3D = (() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobileViewport = window.matchMedia('(max-width: 768px)').matches;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const likelyLowPower = typeof memory === 'number' ? memory <= 4 : false;

    return !reducedMotion && !mobileViewport && !likelyLowPower;
  })();

  if (!canRender3D) {
    return <HeroSceneFallback />;
  }

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <CanvasScene
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.7], fov: 48 }}
        performance={{ min: 0.4, max: 1, debounce: 240 }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 2, 4]} intensity={1.1} color="#ffd7aa" />
        <pointLight position={[-2.5, -1.5, 2.5]} intensity={0.85} color="#ff8c42" />
        <FloatingCore />
      </CanvasScene>
    </div>
  );
}

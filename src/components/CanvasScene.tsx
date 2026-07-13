'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import type { CameraProps } from '@react-three/fiber';

interface CanvasSceneProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  dpr?: number | [number, number];
  frameloop?: 'always' | 'demand' | 'never';
  camera?: CameraProps;
  performance?: {
    min?: number;
    max?: number;
    debounce?: number;
  };
}

export default function CanvasScene({
  children,
  fallback,
  dpr = [1, 2],
  frameloop = 'always',
  camera,
  performance = {
    min: 0.5,
    max: 1,
    debounce: 200,
  },
}: CanvasSceneProps) {
  return (
    <Canvas
      dpr={dpr}
      frameloop={frameloop}
      camera={camera}
      flat
      gl={{ 
        antialias: true, 
        powerPreference: 'high-performance', 
        alpha: true,
        premultipliedAlpha: true,
        stencil: false,
      }}
      performance={performance}
      className="w-full h-full bg-transparent"
      style={{ background: 'transparent', backgroundColor: 'transparent' }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.setClearAlpha(0);
      }}
    >
      <Suspense fallback={fallback || null}>
        {children}
      </Suspense>
    </Canvas>
  );
}

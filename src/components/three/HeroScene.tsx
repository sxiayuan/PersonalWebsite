'use client';

import { Edges, OrbitControls } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { CanvasTexture, LinearFilter, SRGBColorSpace } from 'three';
import CanvasScene from '@/components/CanvasScene';
import { withBasePath } from '@/lib/withBasePath';

const CAMERA_MODEL_POSITION: [number, number, number] = [0, -3.2, 0];
const ORBIT_TARGET_OFFSET: [number, number, number] = [0, 1, 0];
const ORBIT_TARGET: [number, number, number] = [
  CAMERA_MODEL_POSITION[0] + ORBIT_TARGET_OFFSET[0],
  CAMERA_MODEL_POSITION[1] + ORBIT_TARGET_OFFSET[1],
  CAMERA_MODEL_POSITION[2] + ORBIT_TARGET_OFFSET[2],
];
const COMPACT_ORBIT_TARGET: [number, number, number] = [...CAMERA_MODEL_POSITION];
const SCENE_X_OFFSET_PX: number = 350;
const SCENE_Y_OFFSET_PX: number = 110;

function PlaceholderPowerShot() {
  const router = useRouter();
  const screenHotspots = [
    { id: 'me', href: '/', y: 0.374 },
    { id: 'summers', href: '/summers', y: 0.169 },
    { id: 'projects', href: '/projects', y: -0.036 },
    { id: 'experience', href: '/experience', y: -0.241 },
    { id: 'fashionista', href: '/fashionista', y: -0.446 },
    { id: 'reach-out', href: '/reach-out', y: -0.651 },
  ] as const;

  const screenTexture = useMemo(() => {
    if (typeof document === 'undefined') {
      return null;
    }

    const localCanvas = document.createElement('canvas');
    localCanvas.width = 1024;
    localCanvas.height = 640;
    const localCtx = localCanvas.getContext('2d');

    if (!localCtx) {
      return null;
    }

    // Fallback drawing while image loads (or if image is missing).
    localCtx.fillStyle = '#05070A';
    localCtx.fillRect(0, 0, localCanvas.width, localCanvas.height);
    localCtx.fillStyle = '#2C3138';
    localCtx.fillRect(44, 132, 936, 488);
    localCtx.fillStyle = '#F0F2F5';
    localCtx.font = '58px Arial';
    localCtx.fillText('Me', 160, 200);
    localCtx.fillText('Summer(s)', 160, 280);
    localCtx.fillText('Projects', 160, 360);
    localCtx.fillText('Experience', 160, 440);
    localCtx.fillText('Fashionista', 160, 520);
    localCtx.fillText('Reach Out :o', 160, 600);

    const texture = new CanvasTexture(localCanvas);
    texture.colorSpace = SRGBColorSpace;
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.needsUpdate = true;
    return texture;
  }, []);

  useEffect(() => {
    if (!screenTexture) {
      return;
    }

    const localCanvas = screenTexture.image as HTMLCanvasElement | undefined;
    const localCtx = localCanvas?.getContext('2d');
    if (!localCanvas || !localCtx) {
      return;
    }

    const image = new Image();
    let cancelled = false;
    image.src = withBasePath('/camera-screen-reference.png');
    image.onload = () => {
      if (cancelled) {
        return;
      }
      localCtx.clearRect(0, 0, localCanvas.width, localCanvas.height);
      localCtx.drawImage(image, 0, 0, localCanvas.width, localCanvas.height);
      screenTexture.needsUpdate = true;
    };

    return () => {
      cancelled = true;
    };
  }, [screenTexture]);

  return (
    <group position={CAMERA_MODEL_POSITION} scale={0.95}>
      {/* Camera body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.2, 2.15, 0.55]} />
        <meshStandardMaterial color="#F3CFE0" metalness={0.38} roughness={0.34} />
      </mesh>

      {/* Rear lens housing */}
      <mesh position={[0.74, 0.04, -0.33]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.84, 0.9, 0.26, 54]} />
        <meshStandardMaterial color="#BEB8C2" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.74, 0.04, -0.44]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.54, 0.58, 0.18, 54]} />
        <meshStandardMaterial color="#D2CCD6" metalness={0.92} roughness={0.18} />
      </mesh>
      <mesh position={[0.74, 0.04, -0.53]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.29, 0.3, 0.12, 54]} />
        <meshStandardMaterial color="#14161A" metalness={0.22} roughness={0.1} />
      </mesh>

      {/* Flash bar */}
      <mesh position={[1.18, 0.62, 0.29]}>
        <boxGeometry args={[0.94, 0.2, 0.08]} />
        <meshStandardMaterial color="#F7EFE6" emissive="#FAF2E8" emissiveIntensity={0.15} />
      </mesh>

      {/* Front display block (placeholder screen) */}
      <mesh position={[-0.15, 0.03, 0.305]}>
        <boxGeometry args={[2.64, 2.04, 0.08]} />
        <meshStandardMaterial color="#2A2D34" metalness={0.3} roughness={0.42} />
      </mesh>
      <mesh position={[-0.15, 0.03, 0.35]}>
        <boxGeometry args={[2.24, 1.64, 0.02]} />
        <meshStandardMaterial
          color="#F0F5FF"
          map={screenTexture ?? undefined}
          emissive="#2A3854"
          emissiveIntensity={0.32}
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
      <group position={[-0.15, 0.03, 0.372]}>
        {screenHotspots.map((hotspot) => (
          <mesh
            key={hotspot.id}
            position={[0, hotspot.y, 0]}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              router.push(hotspot.href);
            }}
            onPointerOver={() => {
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'default';
            }}
          >
            <planeGeometry args={[2.02, 0.17]} />
            <meshBasicMaterial color="#ff7dc5" transparent opacity={0.02} />
            <Edges color="#ff7dc5" threshold={20} />
          </mesh>
        ))}
      </group>

      {/* Front grip and shutter details */}
      <mesh position={[-1.28, 0, 0.3]}>
        <boxGeometry args={[0.2, 1.22, 0.11]} />
        <meshStandardMaterial color="#C7AFC2" metalness={0.7} roughness={0.28} />
      </mesh>
      <mesh position={[1.05, 0.95, 0.08]}>
        <cylinderGeometry args={[0.14, 0.14, 0.1, 24]} />
        <meshStandardMaterial color="#E8DDE6" metalness={0.8} roughness={0.18} />
      </mesh>

      {/* Rear display block hint */}
      <mesh position={[-0.26, 0.04, -0.3]}>
        <boxGeometry args={[1.5, 1.15, 0.08]} />
        <meshStandardMaterial color="#22262D" metalness={0.1} roughness={0.45} />
      </mesh>
    </group>
  );
}

interface HeroSceneProps {
  compact?: boolean;
}

function HeroSceneFallback({ compact }: { compact?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={compact ? 'h-full w-full rounded-full bg-[#F4DCDC]' : 'absolute inset-0 bg-[#F4DCDC]'}
      style={{ backgroundColor: '#F4DCDC' }}
    />
  );
}


export default function HeroScene({ compact = false }: HeroSceneProps = {}) {
  const canRender3D = (() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const likelyLowPower = typeof memory === 'number' ? memory <= 2 : false;

    return !reducedMotion && !likelyLowPower;
  })();

  if (!canRender3D) {
    return <HeroSceneFallback compact={compact} />;
  }

  const wrapperStyle = compact
    ? undefined
    : { transform: `translateX(${SCENE_X_OFFSET_PX}px) translateY(${SCENE_Y_OFFSET_PX}px)` };
  const cameraProps = compact
    ? { position: [0, CAMERA_MODEL_POSITION[1], 5.2] as [number, number, number], fov: 46 }
    : { position: [0, 0, 5] as [number, number, number], fov: 40 };
  const orbitTarget = compact ? COMPACT_ORBIT_TARGET : ORBIT_TARGET;

  return (
    <div aria-hidden="true" className="absolute inset-0 bg-transparent" style={wrapperStyle}>
      <CanvasScene
        dpr={compact ? [1, 1.25] : [1, 1.5]}
        camera={cameraProps}
        performance={{ min: 0.4, max: 1, debounce: 240 }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3.2, 2.2, 4]} intensity={1.35} color="#FFF5F7" />
        <directionalLight position={[-2.8, -1.3, 1.5]} intensity={0.52} color="#F6D7E3" />
        <PlaceholderPowerShot />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          target={orbitTarget}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
          rotateSpeed={0.72}
          enableDamping
          dampingFactor={0.08}
        />
      </CanvasScene>
    </div>
  );
}

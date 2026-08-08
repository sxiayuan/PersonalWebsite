'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import TopNav from '@/components/TopNav';
import { withBasePath } from '@/lib/withBasePath';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
});

const FLOWER_EMOJIS = ['🌹', '🌸', '🌼', '🌻', '🌺', '🌷', '💮', '🏵️'];
const FLOWER_LIFETIME_MS = 1100;
const FLOWER_SPAWN_THROTTLE_MS = 90;

interface Flower {
  id: number;
  x: number;
  y: number;
  emoji: string;
  hue: number;
  size: number;
  rotate: number;
}

export default function LandingPage() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const nameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const flowerIdRef = useRef(0);
  const lastSpawnRef = useRef(0);

  // Uniformly scale the whole hero "stage" so every word and photo fits
  // within the viewport (shrinking if needed) while allowing a slight
  // upscale (capped at 1.12x) when there's room to spare, without changing
  // any relative proportions.
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const fit = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const naturalWidth = stage.scrollWidth;
      const naturalHeight = stage.scrollHeight;
      if (!viewportWidth || !viewportHeight || !naturalWidth || !naturalHeight) return;

      const fitScale = Math.min(viewportWidth / naturalWidth, viewportHeight / naturalHeight);
      setScale(Math.min(1.12, fitScale));
    };

    fit();
    // Re-measure on the next frame too, in case the viewport wasn't fully
    // ready on the very first synchronous pass.
    const raf = requestAnimationFrame(fit);
    window.addEventListener('resize', fit);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', fit);
    };
  }, []);

  const polaroids = [
    {
      src: '/polaroid-1.jpg',
      alt: 'Team photo',
      className: 'right-[2%] top-[4%] sm:right-[2%] sm:top-[4%]',
      frameClass: 'pb-4'
    },
    {
      src: '/polaroid-2.jpg',
      alt: 'Ice cream selfie',
      className: 'right-[7%] top-[24%] sm:right-[8%] sm:top-[24%]',
      frameClass: 'pb-4'
    },
    {
      src: '/polaroid-3.jpg',
      alt: 'Food photo',
      className: 'right-[1%] top-[46%] sm:right-[1%] sm:top-[46%]',
      frameClass: 'pb-4'
    },
    {
      src: '/polaroid-4.jpg',
      alt: 'Mirror selfie',
      className: 'right-[6%] top-[64%] sm:right-[7%] sm:top-[64%]',
      frameClass: 'pb-4'
    },
  ];

  const spawnFlower = (x: number, y: number) => {
    const now = performance.now();
    if (now - lastSpawnRef.current < FLOWER_SPAWN_THROTTLE_MS) return;
    lastSpawnRef.current = now;

    const id = flowerIdRef.current++;
    const flower: Flower = {
      id,
      x,
      y,
      emoji: FLOWER_EMOJIS[Math.floor(Math.random() * FLOWER_EMOJIS.length)],
      hue: Math.floor(Math.random() * 360),
      size: 1.4 + Math.random() * 1.3,
      rotate: Math.random() * 40 - 20,
    };

    setFlowers((prev) => [...prev, flower]);
    window.setTimeout(() => {
      setFlowers((prev) => prev.filter((f) => f.id !== id));
    }, FLOWER_LIFETIME_MS);
  };

  const handleNameMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    spawnFlower(event.clientX - rect.left, event.clientY - rect.top);
  };

  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#F4DCDC]"
    >
      <TopNav />

      <div
        ref={stageRef}
        className="relative h-screen w-full pt-16"
        style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
          {polaroids.map((item, index) => (
            <div key={`${item.src}-${index}`} className={`absolute ${item.className}`}>
              <div className={`border-[5px] border-white bg-white p-2.5 shadow-[0_22px_56px_rgba(0,0,0,0.2)] ${item.frameClass}`}>
                <Image
                  src={withBasePath(item.src)}
                  alt={item.alt}
                  width={640}
                  height={960}
                  className="block h-auto w-[16rem] object-contain sm:w-[20rem]"
                />
                <div className="h-3 sm:h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-[15]">
          <div className="pointer-events-auto absolute inset-0">
            <HeroScene />
          </div>
        </div>

        <div
          className="pointer-events-none relative z-20 flex h-full w-full items-start justify-start pb-24 pt-24 sm:pb-32 sm:pt-28 lg:pb-36 lg:pt-32"
          style={{
            paddingLeft: 'clamp(1.5rem, 5vw, 4.5rem)',
            paddingTop: 'clamp(5rem, 13vh, 8.5rem)',
          }}
        >
          <div className="relative max-w-3xl text-left">
            <div
              ref={nameRef}
              className="pointer-events-auto relative inline-block"
              onMouseMove={handleNameMouseMove}
            >
              <h1 className="relative z-10 text-[5.2rem] font-semibold leading-[0.82] tracking-[-0.08em] text-[#202020] transition duration-300 sm:text-[8.8rem] lg:text-[12.4rem]">
                Stephanie
                <br />
                Xia
              </h1>
              {/* Flowers bloom at the cursor position, then fade away */}
              <div aria-hidden className="pointer-events-none absolute inset-0 z-20 overflow-visible">
                {flowers.map((flower) => (
                  <span
                    key={flower.id}
                    className="flower-pop absolute select-none"
                    style={{
                      left: flower.x,
                      top: flower.y,
                      fontSize: `${flower.size}rem`,
                      filter: `hue-rotate(${flower.hue}deg) saturate(1.4)`,
                      transform: `rotate(${flower.rotate}deg)`,
                    }}
                  >
                    {flower.emoji}
                  </span>
                ))}
              </div>
            </div>
            <p
              className="relative z-10 max-w-2xl text-[1.35rem] font-medium uppercase leading-[1.6] tracking-[0.24em] text-[#4d4d4d] transition duration-300 sm:text-[1.62rem] lg:text-[1.82rem]"
              style={{ marginTop: 'clamp(5rem, 8vh, 10rem)' }}
            >
              UC Berkeley Industrial Engineering & Operations Research Student
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


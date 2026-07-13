'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef, useState } from 'react';
import TopNav from '@/components/TopNav';
import { withBasePath } from '@/lib/withBasePath';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
});

export default function LandingPage() {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const polaroids = [
    {
      src: '/polaroid-1.jpg',
      alt: 'Team photo',
      className: 'right-[2%] top-[4%] sm:right-[2%] sm:top-[4%]',
      frameClass: 'pb-10'
    },
    {
      src: '/polaroid-2.jpg',
      alt: 'Ice cream selfie',
      className: 'right-[7%] top-[24%] sm:right-[8%] sm:top-[24%]',
      frameClass: 'pb-10'
    },
    {
      src: '/polaroid-3.jpg',
      alt: 'Food photo',
      className: 'right-[1%] top-[46%] sm:right-[1%] sm:top-[46%]',
      frameClass: 'pb-10'
    },
    {
      src: '/polaroid-4.jpg',
      alt: 'Mirror selfie',
      className: 'right-[6%] top-[64%] sm:right-[7%] sm:top-[64%]',
      frameClass: 'pb-10'
    },
  ];

  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden pt-16 bg-[#F4DCDC]"
      onMouseMove={(event) => {
        const rect = textRef.current?.getBoundingClientRect();
        if (!rect) return;
        setGlowPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
        setShowGlow(true);
      }}
      onMouseLeave={() => setShowGlow(false)}
    >
      <TopNav />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
        {polaroids.map((item, index) => (
          <div key={`${item.src}-${index}`} className={`absolute ${item.className}`}>
            <div className={`border-[6px] border-white bg-white p-3 shadow-[0_26px_70px_rgba(0,0,0,0.22)] ${item.frameClass}`}>
              <Image
                src={withBasePath(item.src)}
                alt={item.alt}
                width={640}
                height={960}
                className="block h-auto w-[20rem] object-contain sm:w-[24rem]"
              />
              <div className="h-8 sm:h-10" />
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
        <div ref={textRef} className="relative max-w-3xl text-left">
          <h1 className="relative z-10 text-[6.3rem] font-semibold leading-[0.82] tracking-[-0.08em] text-[#202020] transition duration-300 sm:text-[10.5rem] lg:text-[14.7rem]">
            Stephanie
            <br />
            Xia
          </h1>
          {/* Glow overlay clipped to text only (duplicate heading, positioned exactly over the real one) */}
          <h1
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-20 text-[6.3rem] font-semibold leading-[0.82] tracking-[-0.08em] sm:text-[10.5rem] lg:text-[14.7rem]"
            style={{
              width: '100%',
              height: '100%',
              color: 'transparent',
              mixBlendMode: 'screen',
              backgroundImage: `radial-gradient(circle 70px at ${glowPosition.x}px ${glowPosition.y}px, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 20%, rgba(255,145,190,0.9) 45%, rgba(255,145,190,0.35) 75%, transparent 100%)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              opacity: showGlow ? 1 : 0,
              transition: 'opacity 0.15s linear',
            }}
          >
            Stephanie
            <br />
            Xia
          </h1>
          <p
            className="relative z-10 max-w-2xl text-[1.62rem] font-medium uppercase leading-[1.6] tracking-[0.28em] text-[#4d4d4d] transition duration-300 sm:text-[1.935rem] lg:text-[2.1375rem]"
            style={{ marginTop: 'clamp(5rem, 8vh, 10rem)' }}
          >
            UC Berkeley Industrial Engineering & Operations Research Student
          </p>
        </div>
      </div>
    </section>
  );
}

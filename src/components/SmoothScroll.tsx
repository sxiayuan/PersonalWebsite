'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Drives buttery-smooth scrolling for the whole site and keeps GSAP's
 * ScrollTrigger (used for scroll-linked animations) perfectly in sync with
 * Lenis's interpolated scroll position.
 *
 * Mount this once, near the root layout, above everything else.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Keep ScrollTrigger's cached measurements in sync with Lenis.
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker instead of its own rAF loop so every
    // scroll-linked animation reads a consistent, synced scroll value.
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

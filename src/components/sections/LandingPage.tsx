'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { SITE_CONTENT } from '@/data/siteContent';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
});

export default function LandingPage() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = SITE_CONTENT;

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-warmDark via-gray-900 to-warmDark overflow-hidden pt-16"
    >
      <HeroScene />

      {/* Background animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-warmGold rounded-full filter blur-3xl opacity-20"
          animate={shouldReduceMotion ? undefined : { x: [0, 100, -50, 0], y: [0, -100, 50, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-warmOrange rounded-full filter blur-3xl opacity-10"
          animate={shouldReduceMotion ? undefined : { x: [0, -100, 50, 0], y: [0, 100, -50, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-warmGold to-warmPeach bg-clip-text text-transparent">{hero.name}</h1>

          <p className="text-xl md:text-2xl text-gray-300">{hero.tagline}</p>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">{hero.description}</p>
        </motion.div>

        {/* Call-to-action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href={hero.primaryCta.href}
            className="px-8 py-3 bg-warmGold text-warmDark font-semibold rounded hover:bg-warmOrange transition duration-300"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="px-8 py-3 border-2 border-warmGold text-warmGold font-semibold rounded hover:bg-warmGold hover:text-warmDark transition duration-300"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-warmGold"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

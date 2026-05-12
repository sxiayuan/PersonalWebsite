'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-warmDark via-gray-900 to-warmDark flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        {/* Animated loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-warmGold mb-2">
            Stephanie Xia
          </h1>
          <p className="text-lg text-gray-400">memories loading…</p>
        </motion.div>

        {/* Loading bar animation */}
        <motion.div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-warmGold to-warmOrange"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Floating particles effect */}
        <div className="mt-12 space-y-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-warmGold rounded-full mx-auto"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

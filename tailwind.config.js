/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm sunset palette
        warmDark: '#0a0a0a',
        warmGold: '#ffd700',
        warmOrange: '#ff8c42',
        warmPeach: '#ffb88c',
        warmAmber: '#ffa500',
        // Extracted custom palette
        sageMist: '#A1BCB3',
        forestSlate: '#4A5F4A',
        softLinen: '#E5DCEF',
        blushStone: '#CCB5A8',
        roseCloud: '#F4DCDC',
        dustyRose: '#B38078',
        antiqueGold: '#AE9442',
        charcoalMoss: '#363835',
        fogOlive: '#93978F',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

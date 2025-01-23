/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        jersey: ['"Jersey 15"', 'sans-serif'],
      },
      flip: 'flip 2s infinite linear',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

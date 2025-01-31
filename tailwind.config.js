/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '480px',
        xl: '1280px',
        xxl: '1536px',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        jersey: ['"Jersey 15"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

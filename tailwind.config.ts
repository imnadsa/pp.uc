import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5c5af4',
          dark: '#2d2b8f',
          light: '#e8ebff',
        },
        accent: {
          DEFAULT: '#00BCD4',
          dark: '#0097A7',
        }
      },
      fontFamily: {
        sans: ['var(--font-navigo)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-coolvetica)', 'system-ui', 'sans-serif'],
      },
      // Добавили анимацию блика
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        }
      },
      animation: {
        shine: 'shine 1.5s infinite linear',
      }
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f5e6ff', // Light purple
          200: '#ecd4ff', // Lighter purple
          300: '#ffdeef', // Light pink
          400: '#ffd1e8', // Lighter pink
        },
        accent: {
          500: '#14b8a6', // Teal
          600: '#0d9488', // Darker teal
        }
      }
    },
  },
  plugins: [],
};
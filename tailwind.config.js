
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#38acf7',
          500: '#0e91e9',
          600: '#0274c7',
          700: '#035ca1',
          800: '#074e85',
          900: '#0c426e',
          950: '#082a4a',
        },
      }
    },
  },
  plugins: [],
}

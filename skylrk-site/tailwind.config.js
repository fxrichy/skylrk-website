/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        skylrk: {
          dark: '#0a0a0a',
          blue: {
            light: '#a8d8ea',
            DEFAULT: '#4a90a4',
            dark: '#1a3a4a',
            deep: '#0d1b2a',
          },
          gray: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
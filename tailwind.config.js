/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#040a14',
          panel: 'rgba(12, 27, 47, 0.78)',
          cyan: '#67e8f9',
          blue: '#60a5fa',
          muted: '#b5c6dc',
          line: 'rgba(147, 197, 253, 0.18)',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

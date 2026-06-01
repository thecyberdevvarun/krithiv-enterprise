/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0A4A2E',
          light: '#0d6b42',
        },
        accent: {
          DEFAULT: '#C8E63C',
          dark: '#a8c420',
        },
        surface: '#F7F9F4',
        dark: '#0D1A12',
        text: {
          DEFAULT: '#1C2B21',
          muted: '#5A6B5F',
        },
        border: '#D4E2D8',
      },
    },
  },
  plugins: [],
}

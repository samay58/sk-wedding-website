/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefine Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        herbert: ['Herbert', 'serif'],
      },
      colors: {
        navy: '#1e1b4b',
        'blue-light': '#3b82f6',
        'purple-light': '#4338ca',
      },
    },
  },
  plugins: [],
};
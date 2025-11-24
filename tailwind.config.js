/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      // By Miguel Silva
      colors: {
        'f1-red': '#FF1E00',
        'f1-dark': '#0D0D0D', 
        'f1-light-gray': '#C0C0C0',
      },
      // By Miguel Silva
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // Títulos
        inter: ['Inter', 'sans-serif'],       // Texto
      },
    },
  },
  plugins: [],
}
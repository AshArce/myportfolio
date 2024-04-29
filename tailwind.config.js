/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oceanBlue: '#0C134F',
        customGray: '#302F2F',
        blueSea: '#003366',
        lightPink: '#FFB2D9'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        radley: ['Radley', 'sans-serif'],
      },
      fontSize: {
        '10xl':'100px',
      }
    },
  },
  plugins: [],
};
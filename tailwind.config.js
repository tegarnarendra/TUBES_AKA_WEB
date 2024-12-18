/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./front-end/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo Black", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
      },
      colors: {
        cream: ["E1FFBB"],
      },
    },
  },
  plugins: [],
};

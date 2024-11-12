/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "Almarai"],
        arabic: ["Lato", "Almarai"],
      },
    },
  },
  plugins: [],
};

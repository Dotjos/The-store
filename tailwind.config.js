/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      italianno: ["Italianno", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};

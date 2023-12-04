/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        hedvig: ["Hedvig Letters Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    colors: {
      secondary: "#FFEEBB",
      primary: "#9AC5F4",
      blue: "#00ffff",
      white: "#fff",
      gray: "#444444",
    },
  },
  plugins: [],
};

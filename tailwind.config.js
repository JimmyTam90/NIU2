/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#FF0033", dark: "#CC0029" }, ink: { DEFAULT: "#0F172A", soft: "#334155", mute: "#64748B" }, paper: "#F8FAFC" },
    },
  },
  plugins: [],
};

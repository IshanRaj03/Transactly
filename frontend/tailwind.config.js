/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBEAEB",
        secondary: "#2F3C7E",
        home1: "#1995AD",
        home2: "#A1D6E2",
        home3: "#F1F1F2",
      },
    },
  },
  plugins: [],
};

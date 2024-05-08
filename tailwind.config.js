/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      green: {
        500: "#24B56E",
      },
      gray: {
        650: "#495B60",
      },
    },
    fontFamily: {
      sans: ["Playfair Display", "sans-serif"],
      mont: ["Montserrat", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};

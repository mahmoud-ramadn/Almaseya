const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      orange: {
        400: "#FF842D",
      },
      red: {
        500: "#EF4444",
      },
      blue: {
        500: "#0090FF",
        600: "#17469E",
      },
      purple: {
        500: "#9747FF",
        900: "#333367",
      },
      gray: {
        50: "#F3F8FF",
        100: "#E2E2E2",
        200: "#F9F9F9",
        300: "#AEAEAE",
        500: "#B7B7B7",
      },
      green: {
        500: "#25D366",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
     
      fontFamily: {
        noto: "'Noto Kufi Arabic', sans-serif",
      },
      fontSize: {
        xxs: "10px",
      },
      backgroundImage: {
        "gradient-purple":
          "linear-gradient(90deg, rgba(151, 71, 255, 0.9), rgba(51, 51, 103, 0.7))",
        "gradient-blue-o": "linear-gradient(180deg, #E6F1FE 0%, #D3E6FC 98%)",
      },
      boxShadow: {
        blue: "0px 11px 19px -5px rgba(1, 109, 240, 0.25)",
      },
    },
  },
  plugins: [animate],
};

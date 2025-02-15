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
       red:{
        500:'#EF4444',
       },
      blue: {
        500: "#0090FF",
        600: "#17469E",
      },
      gray: {
        50:'#F3F8FF',
        100:'#E2E2E2',
        200:'#F9F9F9',
        500: "#B7B7B7",
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        noto: "'Noto Kufi Arabic', sans-serif",
      },
      fontSize: {
        xxs: "10px",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(180deg, #67AAFC 0%, #1A80FC 98%)",
        "gradient-blue-o": "linear-gradient(180deg, #E6F1FE 0%, #D3E6FC 98%)",
      },
      boxShadow: {
        blue: "0px 11px 19px -5px rgba(1, 109, 240, 0.25)",
      },
    },
  },
  plugins: [animate],
};

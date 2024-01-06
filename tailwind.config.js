/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      "xl": { max: "1279px" },
      "lg": { max: "1023px" },
      "md": { max: "767px" },
      "sm": { max: "639px" },
    },
    letterSpacing: {
      tightest: '-1.92px',
      tighter: '-0.96px',
      tight: '-0.36px',
      normal: '0',
      wide: '',
      wider: '.05em',
      widest: '.1em',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

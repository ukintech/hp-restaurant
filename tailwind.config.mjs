/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf6f0",
          100: "#f9e8d8",
          200: "#f2ccab",
          300: "#e8a96e",
          400: "#d9863e",
          500: "#c46a24",
          600: "#a8541b",
          700: "#8b4317",
          800: "#6e3514",
          900: "#4a2410",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', "serif"],
      },
    },
  },
  plugins: [],
};

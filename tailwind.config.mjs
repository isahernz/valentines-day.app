import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        "valentines-day": {
          50: "#FFF5FA",
          100: "#FFEBF4",
          200: "#FFD6E9",
          300: "#FFBDDC",
          400: "#FFA8D1",
          500: "#FF93C6",
          600: "#FF429A",
          700: "#F00070",
          800: "#A3004C",
          900: "#520026",
          950: "#290013",
        },
      },
      animation: {
        "text-gradient": "text-gradient 1.5s linear infinite",
      },
      keyframes: {
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    container: {
      center: true,
      padding: "24px",
      screens: {
        xl: "1200px",
      },
    },

    extend: {

      colors: {

        primary: "#2563eb",
        "primary-hover": "#1d4ed8",

        background: "#ffffff",

        text: {
          main: "#0f172a",
          secondary: "#475569",
        },

        border: "#e2e8f0",

      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },

      boxShadow: {

        card: "0 10px 30px rgba(0,0,0,0.08)",
        hero: "0 25px 60px rgba(0,0,0,0.15)",

      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

    },

  },

  plugins: [],

};
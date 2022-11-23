/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "32px",
        lg: "64px",
        xl: "80px",
        "2xl": "96px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#e6f4ff",
          100: "#b0ddff",
          200: "#8accff",
          300: "#54b5ff",
          400: "#33a7ff",
          500: "#0091ff",
          600: "#0084e8",
          700: "#0067b5",
          800: "#00508c",
          900: "#003d6b",
        },
        secondary: {
          50: "#f3f8ec",
          100: "#daeac3",
          200: "#c8e0a6",
          300: "#afd27d",
          400: "#9fc964",
          500: "#87bc3d",
          600: "#7bab38",
          700: "#5A822B",
          800: "#4a6722",
          900: "#394F1A",
        },
        tertiary: {
          10: "#fafafa",
          20: "#f5f5f5",
          30: "#ebebeb",
          40: "#dedede",
          50: "#bfbfbf",
          60: "#b0b0b0",
          70: "#a3a3a3",
          80: "#949494",
          90: "#858585",
          100: "#757575",
          200: "#666666",
          300: "#575757",
          400: "#4a4a4a",
          500: "#3b3b3b",
          600: "#2e2e2e",
          700: "#1c1c1c",
          800: "#0d0d0d",
        },
      },
      fontSize: {
        xxxs: "8px",
        xxs: "10px",
        ...defaultTheme.fontSize,
      },
    },
    screens: {
      xxs: "321px",
      xs: "426px",
      ...defaultTheme.screens,
    },
    letterSpacing: {
      widest: ".25em",
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },

      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },

      colors: {
        secondary: "#767676",
      },
    },
  },
  plugins: [],
};

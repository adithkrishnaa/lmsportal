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
        four: "#F1EFEC",
        top: "#FF0000",
        enr: "#F6F71E",
        hlight: "#D4D3D1",
        dhelp: "#A6A6A6",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(82deg, #812BE7 25.11%, #9783AF 135.6%)",
      },
    },
  },
  plugins: [],
};

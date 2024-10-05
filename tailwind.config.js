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
        cer: "#F6F6F6",
        cerbg: "#A9A9A9",
        notbg: "#E3E3E3",
        modbe: "#A18038",
        quiz: "#00BF63",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(82deg, #812BE7 25.11%, #9783AF 135.6%)",
        "ai-gradient": "linear-gradient(92deg, #10BE00 18.61%, #1976D2 99.36%)",
      },

      backgroundColor: {
        "white-rgba": "rgba(255, 255, 255, 0.01)",
        "blue-rgba": "rgba(255, 255, 255, 0.01)",
      },
      backdropBlur: {
        30: "30px",
        42: "42.15px",
      },
    },
  },
  plugins: [],
};

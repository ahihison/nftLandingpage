/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Inter", "sans-serif"],
        font2: ["Jura", "sans-serif"],
      },
      colors: {
        background: "#191E35",
        primaryColor: "#332FD0",
        secondaryColor: "#F52AF5",
        thirdColor: "#15BFFD",
        redColor: "#FF0000",
        greenColor: "#00FF57",
      },
      backgroundImage: {
        primaryGadient:
          "linear-gradient(93.07deg, #F52AF5 4.14%, #DD37F5 31.35%, #219BF2 73.51%, #00ADF2 95.21%)",
        lineGradient:
          "linear-gradient(90deg, #FFFFFF -0.34%, rgba(255, 255, 255, 0.981385) 32.91%, rgba(255, 255, 255, 0.286954) 102.21%, rgba(255, 255, 255, 0.25) 102.38%)",
      },
    },
  },
  plugins: [],
};

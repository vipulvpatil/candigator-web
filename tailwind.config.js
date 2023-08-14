/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      quicksand: ["var(--font-quicksand)"],
    },
    extend: {
      colors: {
        dark: "#002F3D",
        bold: "#006989",
        subtle: "#F5B82E",
        disabled: "#575E60",
        button: "#C44900",
        buttonDark: "#A33C00",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        hero: "1040px",
      },
      fontSize: {
        primary: "24px",
      },
      margin: {
        relax: "-63px",
        relaxSmall : "-34.5px",
      },
      dropShadow: {
        button: "0 5px 10px rgba(0,0,0,0.5)",
        modal: "0 5px 5px rgba(0,0,0,0.5)",
        modalLeft: "-5px 0 5px rgba(0,0,0,0.5)"
      },
      boxShadow: {
        main: "2px 5px 20px rgba(0,0,0,0.3) inset"
      }
    },
  },
  plugins: [],
}

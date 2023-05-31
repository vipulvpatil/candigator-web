/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      oswald: ["var(--font-oswald)"],
    },
    extend: {
      colors: {
        dark: "#002F3D",
        bold: "#006989",
        subtle: "#C8E6D1",
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
        relax: "-67.5px",
        relaxSmall : "-39px",
      },
      dropShadow: {
        button: "0 5px 20px rgba(0,0,0,0.3)",
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

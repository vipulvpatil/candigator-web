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
        dark: "#7A34AC",
        bold: "#9368B2",
        subtle: "#E7C6FF",
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
      }
    },
  },
  plugins: [],
}

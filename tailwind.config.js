/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            color: "#fff",
            textShadow: "0 0 12px #F79537, 0 0 50px #F79537, 0 0 100px #F79537",
          },
          "10%, 90%": { color: "#F79537", textShadow: "none" },
        },
      },
      animation: {
        glow: "glow 5s ease-in-out infinite alternate",
      },
      colors: {
        bg: "#151c2c",
        bgSoft: "#4093CB",
        bgHover: "#2e374a",
        text: "white",
        textSoft: "#b7bac1",
        pending: "#f5a623",
        approved: "#2ecc71",
        canceled: "#e74c3c",
        gradientLighter: "#182237",
        gradientDarker: "#253352",
        button: "#4169E1",
        buttonView: "#2ecc71",
        buttonDelete: "red",
      },
      flex: {
        1: "1 1 0%",
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
    },
  },
  plugins: [require("daisyui")],
};

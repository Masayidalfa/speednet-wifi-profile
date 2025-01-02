/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: {transfrom: "translateX(0)"},
          to: {transform: "translateX(-75%)"},
        }
      }
    },
  },
  plugins: [],
}


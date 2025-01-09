/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",    
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#192a56',
        'secondary': '#0b8ea7',
      },
    },
  },
  plugins: [],
}


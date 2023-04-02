/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./public/index.html"],
  theme: {
    extend: {
      colors: {
        "main": "hsl(233, 47%, 7%)",
        "card": "hsl(244, 38%, 16%)",
        "accent": "hsl(277, 64%, 61%)",
        "paragraph": "hsla(0, 0%, 100%, 0.75)",
        "stat-heading": "hsla(0, 0%, 100%, 0.6)"
      },
      fontFamily: {
        "lexend": "Lexend Deca",
        "Inter": "Inter"
      }
    },
  },
  plugins: [],
}
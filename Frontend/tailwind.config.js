/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      backgroundImage: {
        HomeBg: "url('../src/assets/Homebg.jpg')",
      },
      fontFamily: {
        'MaShanZheng': ['MaShanZheng'],
        'Cabin':['Cabin']
      },
    },
  },
  plugins: [],
}
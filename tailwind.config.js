/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brightBlue: 'hsl(220, 98%, 61%)',
        veryDarkBlueDark: 'hsl(235, 21%, 11%)',
        veryDarkDesaturatedBlueDark: 'hsl(235, 24%, 19%)',
        lightGrayishBlueDark: 'hsl(234, 39%, 85%)',
        lightGrayishBlueHoverDark: 'hsl(236, 33%, 92%)',
        darkGrayishBlueDark: 'hsl(234, 11%, 52%)',
        veryDarkGrayishBlueDark: 'hsl(233, 14%, 35%)',
        veryDarkGrayishBlue1Dark: 'hsl(237, 14%, 26%)',

        veryLightGrayLight: 'hsl(0, 0%, 98%)',
        veryLightGrayishBlueLight: 'hsl(236, 33%, 92%)',
        lightGrayishBlueLight: 'hsl(233, 11%, 84%)',
        darkGrayishBlueLight: 'hsl(236, 9%, 61%)',
        veryDarkGrayishBlueLight: 'hsl(235, 19%, 35%)',
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"]
      }
    },
  },
  
  plugins: [],
};

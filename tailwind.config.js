/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      content: {
        check: 'url("./Images/icon-check.svg")'
      },
      colors: {
        blue: 'hsl(220, 98%, 61%)',
        gradient1: 'hsl(192, 100%, 67%)',
        gradient2: 'hsl(280, 87%, 65%)',
        light: {
          gray: 'hsl(0, 0%, 98%)',
          blue: {
            200: 'hsl(236, 33%, 92%)',
            300: 'hsl(233, 11%, 84%)',
            400: 'hsl(236, 9%, 61%)',
            500: 'hsl(235, 19%, 35%)',
          }
        },
        dark: {
          blue: {
            200: 'hsl(236, 33%, 92%)',
            300: 'hsl(234, 39%, 85%)',
            400: 'hsl(234, 11%, 52%)',
            500: 'hsl(233, 14%, 35%)',
            600: 'hsl(237, 14%, 26%)',
            700: 'hsl(235, 24%, 19%)',
            800: 'hsl(235, 21%, 11%)',
          }
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,webp,jpg,png}"],
  theme: {
    extend: {
      colors: {
        'jio': '#89153a',
        'jio-secondary': '#b23f5a',
        'jio-accent': '#db657d',
        'jio-background': '#f4f4f4',
        'jio-text': '#1c1c1c',
        'ksi': '#56348a',
        'il': '#542c8c'
      },
      fontFamily: {
        title: ["Domine", "sans-serif"],
        text: ["Poppins", "sans-serif"]
      },
      screens: {
        'uw': '2560px',
      },
    },
  },
}


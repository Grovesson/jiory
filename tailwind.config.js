/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'jio': '#89153a',
        'jio-secondary': '#b23f5a',
        'jio-accent': '#db657d',
        'jio-background': '#f4f4f4',
        'jio-text': '#1c1c1c'
      },
      fontFamily: {
        title: ["Domine", "sans-serif"],
        text: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}


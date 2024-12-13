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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeOut: 'fadeOut 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}


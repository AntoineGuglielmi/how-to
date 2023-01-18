/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    typography: {
      default: {
        css: {
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
        },
      },
    },
    extend: {
      animation: {
        'menu': 'menu 0.15s linear',
      },
      keyframes: {
        menu: {
          '0%': { transform: 'translateY(-7px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      fontSize: {
        xlg: '2rem'
      },
      fontFamily: {
        'nunito': 'Nunito, sans-serif',
        'code': 'JetBrains Mono'
      },
      colors: {
        'howToViolet': {
          100: '#9793e6',
          200: '#7a73d6',
          300: '#665cc2',
          400: '#5440ad',
          500: '#483490',
          600: '#3e2973',
          700: '#342159',
          800: '#301947',
          900: '#2c1636'
        },
        'howToBrown': {
          100: '#f5b5b5',
          200: '#f1a3a3',
          300: '#dc8f8f',
          400: '#c77a7a',
          500: '#b36666',
          600: '#9c4d4d',
          700: '#8a3b3b',
          800: '#6e200c',
          900: '#471308'
        },
        'howToPurple': {
          100:'#715f95',
          200:'#685889',
          300:'#5f507c',
          400:'#554870',
          500:'#4c4064',
          600:'#433857',
          700:'#3a304b',
          800:'#30283e',
          900: '#272032',
        }
      },
      boxShadow: {
        'reg': '0 0 0.5rem 0 rgba(0,0,0,0.5)',
        'reg-1': '0 0 1rem 0 rgba(0,0,0,0.6)',
        'reg-2': '0 0 2rem 0 rgba(0,0,0,0.6)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require(`@tailwindcss/typography`)
  ]
}

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
    extend: {
      fontSize: {
        xxl: '2rem'
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
        }
      },
      boxShadow: {
        reg: '0 0 0.5rem 0 rgba(0,0,0,0.5)'
      }
    },
  },
  plugins: [],
}

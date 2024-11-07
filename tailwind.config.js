/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-yellow': 'linear-gradient(90deg, #F5BD4D 0.36%, #F89222 99.88%)'
      },
      colors: {
        'primary-yellow' : '#F89222',
        'nav-bg' : '#121414;'
      }
    },
  },
  plugins: [],
}


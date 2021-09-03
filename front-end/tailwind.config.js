module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brown: '#36231F',
        red: {
          dark: '#E3463D'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

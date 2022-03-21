module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'space': "url('../images/background-images/17086.jpg')",
       }),
    },
    fontFamily: {
      'title': ['Fascinate', 'serif']
    },
    flexGrow: {
      '2': 2
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'active'],
    },
  },
  plugins: [],
}

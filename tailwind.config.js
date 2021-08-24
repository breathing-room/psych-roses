module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gold-foil': "url('/images/gold-foil.jpg')",
       }),
    },
    fontFamily: {
      'title': ['Fascinate', 'serif']
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'active'],
    },
  },
  plugins: [],
}

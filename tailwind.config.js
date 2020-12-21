module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      colors: {
        green: '#1DB954',
        'dark-green':'#168D40',
        black: '#191414',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

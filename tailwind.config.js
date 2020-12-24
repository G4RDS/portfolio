const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 1px 3px rgb(51, 65, 85, 0.05)',
      DEFAULT: '0 4px 6px -1px rgb(51, 65, 85, 0.05)',
      lg: '0 8px 16px rgb(51, 65, 85, 0.05)',
    },
    extend: {
      colors: {
        gray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [],
};

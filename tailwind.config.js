module.exports = {
  node: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    // border: ['active', 'focus'],
    borderColor: ['active'],
    borderStyle: ['active'],
    // borderBottomWidth: ['active'],
    borderWidth: ['active'],
  },
  plugins: [],
};

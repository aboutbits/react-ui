module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {},
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}

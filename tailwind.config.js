/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './.storybook/preview.js',
  ],
  theme: {
    extend: {
      colors: {
        purple: colors.purple,
      },
    },
  },
  presets: [require('./tailwind-preset.js')],
  plugins: [require('@tailwindcss/forms')],
}

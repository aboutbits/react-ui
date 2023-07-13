/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './src/**/theme.ts',
    './src/**/*.stories.tsx',
    './src/**/*.templates.tsx',
    './src/**/*.mdx',
    './.storybook/preview.tsx',
  ],
  theme: {
    extend: {
      colors: {
        purple: colors.purple,
      },
    },
  },
  darkMode: 'class',
  presets: [require('./tailwind-preset.js')],
  plugins: [require('@tailwindcss/forms')],
}

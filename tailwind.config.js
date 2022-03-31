/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './.storybook/preview.js',
  ],
  presets: [require('./tailwind-preset.js')],
  plugins: [require('@tailwindcss/forms')],
}

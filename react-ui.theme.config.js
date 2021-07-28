// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

const customTheme = plugin(function ({ addComponents, theme }) {
  const themeStyles = {
    '.abui-section': {
      backgroundColor: theme('colors.white'),
    },
    '.section-content': {
      backgroundColor: 'green',
    },
  }

  addComponents(themeStyles)
})

module.exports = {
  customTheme,
}

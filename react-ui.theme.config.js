// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

const customTheme = plugin(function ({ addComponents, theme }) {
  const formTheme = {
    '.abui-form-message-positive': {
      borderWidth: '1px',
      borderColor: theme('colors.positive.DEFAULT'),
      backgroundColor: theme('colors.positive.100'),
    },
    '.abui-form-message-icon-container-positive': {
      backgroundColor: theme('colors.positive.DEFAULT'),
    },
    '.abui-form-message-icon-positive': {
      color: theme('colors.white'),
    },
    '.abui-form-message-content-positive': {
      color: theme('colors.black'),
    },
    '.abui-form-message-critical': {
      borderWidth: '1px',
      borderColor: theme('colors.critical.DEFAULT'),
      backgroundColor: theme('colors.critical.100'),
    },
    '.abui-form-message-icon-container-critical': {
      backgroundColor: theme('colors.critical.DEFAULT'),
    },
    '.abui-form-message-icon-critical': {
      color: theme('colors.white'),
    },
    '.abui-form-message-content-critical': {
      color: theme('colors.black'),
    },
    '.abui-field-error-message': {
      color: theme('colors.critical.DEFAULT'),
    },
  }

  const themeStyles = {
    '.abui-section': {
      backgroundColor: theme('colors.white'),
    },
    ...formTheme,
  }

  addComponents(themeStyles)
})

module.exports = {
  customTheme,
}

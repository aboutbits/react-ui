import React from 'react'
import { IntlProvider } from 'react-intl';
import '../styles/index.css'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import { makeTheme } from '../src/theme/theme'
import enMessages from '../src/translations/shared.en.json'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={makeTheme()}>
      <IntlProvider
        locale="en"
        messages={enMessages}
      >
        <Story />
      </IntlProvider>
    </ThemeProvider>
  ),
];

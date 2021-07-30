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
  docs: {
    source: {
      excludeDecorators: true,
    },
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={makeTheme({form: {input: { normal: 'text-red'}}})}>
      <IntlProvider
        locale="en"
        messages={enMessages}
      >
        <Story />
      </IntlProvider>
    </ThemeProvider>
  ),
];

import React from 'react'
import { IntlProvider } from 'react-intl';
import '../styles/index.css'
import { makeTheme } from '../src/designSystem/theme/theme'
import enMessages from '../src/translations/shared.en.json'
import {DesignSystemProvider} from "../src/designSystem/DesignSystemProvider";

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
    <DesignSystemProvider theme={makeTheme()}>
      <IntlProvider
        locale="en"
        messages={enMessages}
      >
        <Story />
      </IntlProvider>
    </DesignSystemProvider>
  ),
];

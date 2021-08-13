import React from 'react'
import {IntlProvider, useIntl} from 'react-intl';
import '../styles/index.css'
import { makeTheme } from '../src/designSystem/theme/theme'
import enMessages from '../src/translations/shared.en.json'
import { DesignSystemProvider } from "../src/designSystem/DesignSystemProvider";

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


const themeOverwrite = {
  button: {
    button: {
      variantTone: {
        solid: {
          green: "border-transparent bg-green hover:bg-green-700 focus:bg-green-700 text-white font-bold",
        },
        ghost: {
          green: "border-green hover:border-green-700 text-primary hover:text-green-700",
        },
        transparent: {
          green: "text-green hover:text-green-700",
        },
      }
    }
  }
}

export const decorators = [
  (Story) => {
    const intl = useIntl()
    const internationalization = {
      translate: (key, values) => intl.formatMessage({id: key}, values)
    }
    return (
      <DesignSystemProvider theme={makeTheme(themeOverwrite)} internationalization={internationalization}>
        <Story />
      </DesignSystemProvider>
    )
  },
  (Story) => (
    <IntlProvider
      locale="en"
      messages={enMessages}
    >
      <Story />
    </IntlProvider>
  )
];

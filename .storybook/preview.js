import React from 'react'
import {IntlProvider, useIntl} from 'react-intl';
import '../styles/index.css'
import enMessages from '../src/translations/shared.en.json'
import { ReactUIProvider, defaultTheme as customTheme } from "../src";
import { makeLinkComponent } from '../framework'

// Add custom button tone for demo purpose
customTheme.button.variantTone.solid.purple =
  'bg-purple-500 hover:bg-purple-600 text-white outline-purple-500'
customTheme.button.variantTone.ghost.purple =
  'hover:bg-purple-50 focus:bg-purple-50 border-purple-500 focus:border-transparent text-purple-500 outline-purple-500'
customTheme.button.variantTone.transparent.purple =
  'hover:bg-purple-50 text-purple-500 focus:outline-purple-500'

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

const LinkComponent = makeLinkComponent(
  ({ children, internal, href, ...props }, ref) => (
      <a ref={ref} href={href} {...props}>
        {children}
      </a>
  )
)

export const decorators = [
  (Story) => {
    const intl = useIntl()
    const internationalization = {
      translate: (key, values) => intl.formatMessage({id: key}, values)
    }
    return (
      <ReactUIProvider theme={customTheme} internationalization={internationalization} linkComponent={LinkComponent}>
        <Story />
      </ReactUIProvider>
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

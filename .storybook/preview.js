import React from 'react'
import {IntlProvider, useIntl} from 'react-intl';
import '../styles/index.css'
import enMessages from '../src/translations/shared.en.json'
import { ReactUIProvider, defaultTheme } from "../src";
import { makeLinkComponent } from '../framework'

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
      <ReactUIProvider theme={defaultTheme} internationalization={internationalization} linkComponent={LinkComponent}>
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

import React from 'react'
import { defaultTheme as customTheme, ReactUIProvider, makeLinkComponent } from '../src'
import '../styles/index.css'

// Add custom button tone for demo purpose
customTheme.button.modeVariantTone.light.solid.purple =
  'bg-purple-500 hover:bg-purple-600 text-white outline-purple-500'
customTheme.button.modeVariantTone.light.ghost.purple =
  'hover:bg-purple-50 focus:bg-purple-50 border-purple-500 focus:border-transparent text-purple-500 outline-purple-500'
customTheme.button.modeVariantTone.light.transparent.purple =
  'hover:bg-purple-50 text-purple-500 focus:outline-purple-500'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
  },
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
    return (
      <ReactUIProvider
        theme={customTheme}
        linkComponent={LinkComponent}
      >
        <Story />
      </ReactUIProvider>
    )
  },
  (Story) => (
    <div className="text-neutral-800">
      <Story />
    </div>
  ),
]

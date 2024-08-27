import { Preview } from '@storybook/react'
import { ReactUIProvider, defaultTheme, makeLinkComponent } from '../src'
import '../styles/index.css'
import { Background } from './types'

const LinkComponent = makeLinkComponent(
  ({ children, _internal, href, ...props }, ref) => (
    <a ref={ref} href={href} {...props}>
      {children}
    </a>
  ),
)

const preview: Preview = {
  parameters: {
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
    backgrounds: {
      default: Background.White,
      values: [
        {
          name: Background.White,
          value: '#fff',
        },
        {
          name: Background.Black,
          value: '#000',
        },
      ],
    },
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <ReactUIProvider theme={defaultTheme} linkComponent={LinkComponent}>
            <Story />
          </ReactUIProvider>
        </div>
      )
    },
  ],
}

export default preview

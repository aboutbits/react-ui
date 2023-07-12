import { Preview } from '@storybook/react'
import { defaultTheme, Theme, ReactUIProvider, makeLinkComponent } from '../src'
import { Background } from './types'
import '../styles/index.css'

// Add custom button tone for demo purpose
type AugmentedTheme = Theme & {
  button: {
    modeVariantTone: {
      light: {
        solid: { purple: string }
        ghost: { purple: string }
        transparent: { purple: string }
      }
    }
  }
}
const theme = defaultTheme as AugmentedTheme
theme.button.modeVariantTone.light.solid.purple =
  'bg-purple-500 hover:bg-purple-600 text-white outline-purple-500'
theme.button.modeVariantTone.light.ghost.purple =
  'hover:bg-purple-50 focus:bg-purple-50 border-purple-500 focus:border-transparent text-purple-500 outline-purple-500'
theme.button.modeVariantTone.light.transparent.purple =
  'hover:bg-purple-50 text-purple-500 focus:outline-purple-500'

const LinkComponent = makeLinkComponent(
  ({ children, _internal, href, ...props }, ref) => (
    <a ref={ref} href={href} {...props}>
      {children}
    </a>
  )
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
        <div className="text-paragraph-md">
          <ReactUIProvider theme={theme} linkComponent={LinkComponent}>
            <Story />
          </ReactUIProvider>
        </div>
      )
    },
  ],
}

export default preview

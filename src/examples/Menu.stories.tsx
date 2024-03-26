import { action } from '@storybook/addon-actions'
import { Meta, StoryFn } from '@storybook/react'
import { Primary, Title, Markdown } from '@storybook/addon-docs'
import { useEffect, useRef, useState } from 'react'
import {
  Tone,
  Menu,
  MenuItem,
  MenuPlacement,
  Button,
  ButtonVariant,
} from '../components'

const meta = {
  component: Menu,
  argTypes: {
    button: { table: { disable: true } },
    placement: { table: { disable: true } },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Markdown>
            The following example provides a language picker using the menu
            components. It allows the user to switch among the provided
            languages.
          </Markdown>
          <Primary />
        </>
      ),
    },
  },
  decorators: [
    (Story) => {
      const elementRef = useRef<HTMLDivElement>(null)

      useEffect(() => {
        elementRef.current?.scrollIntoView({ block: 'center' })
      }, [])

      return (
        <div className="h-screen overflow-y-scroll border-2" tabIndex={-1}>
          <div className="flex h-[100rem] items-center justify-center">
            <div>
              <div className="px-4">
                Container with &quot;overflow: hidden&quot;
              </div>
              <div className="mx-4 flex items-center justify-center overflow-hidden border-2 p-8">
                <div ref={elementRef}>
                  <Story />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryFn<typeof meta>

export const Default: Story = () => {
  const supportedLanguages = {
    EN: 'English',
    DE: 'Deutsch',
    IT: 'Italiano',
  }
  const [currentLanguage, setCurrentLanguage] = useState('EN')
  return (
    <Menu
      button={
        <Button variant={ButtonVariant.Ghost} tone={Tone.Neutral}>
          {currentLanguage}
        </Button>
      }
      placement={MenuPlacement.Bottom}
    >
      {Object.entries(supportedLanguages).map(([abbr, language]) => (
        <MenuItem
          onClick={() => {
            setCurrentLanguage(abbr)
            action('onClick')(abbr)
          }}
          key={abbr}
        >
          {language}
        </MenuItem>
      ))}
    </Menu>
  )
}

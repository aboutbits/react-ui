import { action } from '@storybook/addon-actions'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef } from 'react'
import { Theme } from '../../../.storybook/components'
import { Button } from '../button'
import { Tone } from '../types'
import { Menu, MenuPlacement } from './Menu'
import { MenuItem } from './MenuItem'

const meta = {
  component: MenuItem,
  args: {
    children: 'Menu item',
    onClick: action(`onClick()`),
    tone: Tone.Neutral,
  },
  argTypes: {
    disabled: { type: 'boolean' },
    tone: {
      options: Object.values(Tone).filter(
        (t) => t === Tone.Neutral || t === Tone.Critical,
      ),
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="button" items={['button']} />
          <Stories />
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
        <div className="h-60 overflow-y-scroll border-2" tabIndex={-1}>
          <div className="flex h-[42rem] items-center justify-center">
            <div ref={elementRef}>
              <Menu
                placement={MenuPlacement.Bottom}
                button={<Button aria-label="Menu">Menu</Button>}
              >
                <Story />
              </Menu>
            </div>
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof MenuItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

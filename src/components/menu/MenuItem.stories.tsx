import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import {
  Controls,
  Primary,
  Stories,
  Subheading,
  Title,
  Description,
} from '@storybook/addon-docs'
import { useEffect, useRef } from 'react'
import { Theme } from '../../../.storybook/components'
import { Button } from '../button'
import { Menu, MenuPlacement } from './Menu'
import { MenuItem } from './MenuItem'

const meta = {
  component: MenuItem,
  args: {
    children: 'Menu item',
    onClick: action(`onClick()`),
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
        <div className="h-96 overflow-y-scroll border-2" tabIndex={-1}>
          <div className="flex h-[1100px] items-center justify-center">
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
  args: {} as never,
}

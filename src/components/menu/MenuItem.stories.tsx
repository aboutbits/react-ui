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
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="menu" items={['menuItem']} />
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
              <Story />
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
  render: ({ onClick, ...args }) => {
    return (
      <Menu
        placement={MenuPlacement.Bottom}
        button={<Button aria-label="Menu">Menu</Button>}
      >
        {Array.from(Array(1).keys())
          .map((item) => item + 1)
          .map((item) => (
            <MenuItem
              key={item}
              onClick={action(`onClick(${item})`)}
              {...args}
            >{`Menu item ${item}`}</MenuItem>
          ))}
      </Menu>
    )
  },
}

import IconArrowDropUp from '@aboutbits/react-material-icons/dist/IconArrowDropUp'
import IconMoreVert from '@aboutbits/react-material-icons/dist/IconMoreVert'
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
import classNames from 'classnames'
import { useEffect, useRef } from 'react'
import { Theme } from '../../../.storybook/components'
import { Menu, Placement } from './Menu'
import { MenuItem } from './MenuItem'

const meta = {
  component: Menu,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="menu" />
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
        <div className="h-96 overflow-y-scroll border-2">
          <div className="flex h-[1100px] items-center justify-center">
            <div ref={elementRef}>
              <Story />
            </div>
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const WithLabel: Story = {
  render: (args) => {
    return (
      <Menu {...args}>
        {Array.from(Array(3).keys())
          .map((item) => item + 1)
          .map((item) => (
            <MenuItem
              key={item}
              onClick={action(`onClick(${item})`)}
            >{`Menu item ${item}`}</MenuItem>
          ))}
      </Menu>
    )
  },
  args: {
    placement: Placement.Bottom,
    buttonChildren: 'Menu',
  },
}

export const LabelWithArrow: Story = {
  ...WithLabel,
  args: {
    placement: Placement.Top,
    buttonChildren: ({ placement, open }) => (
      <>
        Menu
        <IconArrowDropUp
          className={classNames(
            'h-6 w-6',
            placement === Placement.Top
              ? open
                ? 'rotate-180 transform'
                : ''
              : open
              ? ''
              : 'rotate-180 transform',
          )}
        />
      </>
    ),
  },
}

export const ThreeDots: Story = {
  ...WithLabel,
  args: {
    placement: Placement.BottomEnd,
    buttonChildren: <IconMoreVert className="h-6 w-6" />,
  },
}

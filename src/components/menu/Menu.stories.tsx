import IconArrowDropUpOutlinedFilled from '@aboutbits/react-material-icons/dist/IconArrowDropUpOutlinedFilled'
import IconMoreVertOutlinedFilled from '@aboutbits/react-material-icons/dist/IconMoreVertOutlinedFilled'
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
import classNames from 'classnames'
import { ReactNode, forwardRef, useEffect, useRef } from 'react'
import { Theme } from '../../../.storybook/components'
import { Button, ButtonIcon, ButtonVariant } from '../button'
import { Tone } from '../types'
import { Menu, MenuPlacement } from './Menu'
import { MenuItem } from './MenuItem'

const meta = {
  component: Menu,
  args: {
    placement: MenuPlacement.Bottom,
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
        <div className="h-96 overflow-y-scroll border-2" tabIndex={-1}>
          <div className="flex h-[70rem] items-center justify-center">
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

type MenuButtonProps = { children: ReactNode } & Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'children' | 'className'
>

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  function MenuButton({ children, ...props }, ref) {
    return (
      <button
        className={classNames(
          'flex items-center underline focus:no-underline focus:outline-hidden focus:ring-3',
          props.disabled && 'text-neutral-800/[0.36]',
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

export const WithCustomButton: Story = {
  render: (args) => {
    return (
      <Menu {...args}>
        {Array.from(Array(3).keys())
          .map((item) => item + 1)
          .map((item) => (
            <MenuItem
              key={item}
              onClick={action(`onClick(${item.toString()})`)}
            >{`Menu item ${item.toString()}`}</MenuItem>
          ))}
      </Menu>
    )
  },
  args: {
    button: <MenuButton>Menu</MenuButton>,
  },
}

export const WithDisabledButton: Story = {
  ...WithCustomButton,
  args: {
    button: <MenuButton disabled>Menu</MenuButton>,
  },
}

export const WithCustomButtonAndArrow: Story = {
  ...WithCustomButton,
  args: {
    button: ({ placement, open }) => (
      <MenuButton>
        Menu
        <IconArrowDropUpOutlinedFilled
          className={classNames(
            'h-6 w-6',
            placement === MenuPlacement.Top
              ? open
                ? 'rotate-180 transform'
                : ''
              : open
                ? ''
                : 'rotate-180 transform',
          )}
        />
      </MenuButton>
    ),
  },
}

export const WithButton: Story = {
  ...WithCustomButton,
  args: {
    button: <Button>Menu</Button>,
  },
}

export const WithButtonIcon: Story = {
  ...WithCustomButton,
  args: {
    button: (
      <ButtonIcon
        icon={IconMoreVertOutlinedFilled}
        tone={Tone.Neutral}
        variant={ButtonVariant.Transparent}
      />
    ),
  },
}

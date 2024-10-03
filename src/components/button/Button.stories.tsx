import {
  IconAddOutlinedFilled,
  IconInfoOutlinedFilled,
} from '@aboutbits/react-material-icons'
import {
  Controls,
  Description,
  Markdown,
  Primary,
  Source,
  Stories,
  Subheading,
  Title,
} from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../.storybook/components'
import { CustomTheme } from '../../../.storybook/components/CustomTheme'
import { Background } from '../../../.storybook/types'
import { Mode, Size } from '../types'
import { Button } from './Button'
import { ButtonVariant } from './types'

const icons = {
  options: ['None', 'Add', 'Info'],
  mapping: {
    None: undefined,
    Add: IconAddOutlinedFilled,
    Info: IconInfoOutlinedFilled,
  },
}

const meta = {
  component: Button,
  args: {
    children: 'Default Button',
  },
  argTypes: {
    iconStart: icons,
    iconEnd: icons,
    disabled: { type: 'boolean' },
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
          <Markdown>All other externally defined props are:</Markdown>
          <Source code="React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>" />
          <Theme component="button" items={['button']} />
          <CustomTheme
            obj={{
              button: {
                mode: {
                  LIGHT: {
                    SOLID: {
                      urgent:
                        'bg-purple-500 hover:bg-purple-600 text-white outline-purple-500',
                    },
                    GHOST: {
                      urgent:
                        'hover:bg-purple-50 focus:bg-purple-50 border-purple-500 focus:border-transparent text-purple-500 outline-purple-500',
                    },
                  },
                },
              },
            }}
          />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ModeDark: Story = {
  args: { mode: Mode.Dark },
  parameters: {
    backgrounds: { default: Background.Black },
  },
}

export const VariantSolid: Story = {
  args: { variant: ButtonVariant.Solid },
}
export const VariantGhost: Story = {
  args: { variant: ButtonVariant.Ghost },
}

export const SizeSmall: Story = {
  args: { size: Size.Sm },
}
export const SizeMedium: Story = {
  args: { size: Size.Md },
}
export const SizeLarge: Story = {
  args: { size: Size.Lg },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const IconStart: Story = {
  args: {
    iconStart: IconInfoOutlinedFilled,
  },
}
export const IconEnd: Story = {
  args: {
    iconEnd: IconInfoOutlinedFilled,
  },
}

export const FullWidth: Story = {
  args: {
    className: 'w-full',
  },
}

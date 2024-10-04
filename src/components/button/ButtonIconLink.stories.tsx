import IconAddOutlinedFilled from '@aboutbits/react-material-icons/dist/IconAddOutlinedFilled'
import IconInfoOutlinedFilled from '@aboutbits/react-material-icons/dist/IconInfoOutlinedFilled'
import {
  Controls,
  Description,
  Primary,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../.storybook/components'
import { Mode, Size, Tone } from '../types'
import { ButtonIconLink } from './ButtonIconLink'
import { ButtonVariant } from './types'

const meta = {
  component: ButtonIconLink,
  args: {
    href: '#',
    disabled: false,
    mode: Mode.Light,
    variant: ButtonVariant.Solid,
    size: Size.Md,
    tone: Tone.Primary,
    icon: IconAddOutlinedFilled,
  },
  argTypes: {
    mode: {
      options: Object.values(Mode),
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: 'radio' },
    },
    size: {
      options: Object.values(Size),
      control: { type: 'radio' },
    },
    tone: {
      options: Object.values(Tone),
      control: { type: 'select' },
    },
    icon: {
      options: ['Info', 'Add'],
      mapping: {
        Info: IconInfoOutlinedFilled,
        Add: IconAddOutlinedFilled,
      },
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
          <Theme
            component="button"
            items={['buttonIcon', 'modeVariantTone', 'button']}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof ButtonIconLink>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

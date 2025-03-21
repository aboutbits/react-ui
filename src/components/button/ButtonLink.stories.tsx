import IconAddOutlinedFilled from '@aboutbits/react-material-icons/dist/IconAddOutlinedFilled'
import IconInfoOutlinedFilled from '@aboutbits/react-material-icons/dist/IconInfoOutlinedFilled'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../.storybook/components'
import { Mode, Size, Tone } from '../types'
import { ButtonLink } from './ButtonLink'
import { ButtonVariant } from './types'

const meta = {
  component: ButtonLink,
  title: 'Components/button/ButtonLink',
  args: {
    children: 'Default Button',
    href: '#ButtonLink',
    disabled: false,
    internal: true,
    mode: Mode.Light,
    variant: ButtonVariant.Solid,
    size: Size.Md,
    tone: Tone.Primary,
    iconStart: undefined,
    iconEnd: undefined,
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
    iconStart: {
      options: ['None', 'Add', 'Info'],
      mapping: {
        None: undefined,
        Add: IconAddOutlinedFilled,
        Info: IconInfoOutlinedFilled,
      },
      control: { type: 'select' },
    },
    iconEnd: {
      options: ['None', 'Add', 'Info'],
      mapping: {
        None: undefined,
        Add: IconAddOutlinedFilled,
        Info: IconInfoOutlinedFilled,
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
          <Theme component="button" items={['button', 'modeVariantTone']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof ButtonLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ExternalLink: Story = {
  args: {
    href: '/',
    internal: false,
  },
}

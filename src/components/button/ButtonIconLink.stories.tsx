import {
  Controls,
  Description,
  Markdown,
  Primary,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import IconAdd from '@aboutbits/react-material-icons/dist/IconAdd'
import IconInfo from '@aboutbits/react-material-icons/dist/IconInfo'
import { Mode, Size, Tone } from '../types'
import { ButtonVariant } from './types'
import { ButtonIconLink } from './ButtonIconLink'

const meta = {
  component: ButtonIconLink,
  args: {
    href: '#',
    disabled: false,
    mode: Mode.Light,
    variant: ButtonVariant.Solid,
    size: Size.Md,
    tone: Tone.Primary,
    icon: IconAdd,
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
        Info: IconInfo,
        Add: IconAdd,
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
          <Markdown>
            All themes are the same as for the
            [ButtonIcon](/docs/components-button-buttonicon--default-story#theme).
          </Markdown>
          <Subheading>Mode</Subheading>
          <Markdown>
            The mode is the same as for the
            [ButtonIcon](/docs/components-button-buttonicon--default-story#theme).
          </Markdown>
          <Subheading>Variants</Subheading>
          <Markdown>
            The variants are the same as for the
            [ButtonIcon](/docs/components-button-buttonicon--default-story#theme).
          </Markdown>
          <Subheading>Size</Subheading>{' '}
          <Markdown>
            The size is the same as for the
            [ButtonIcon](/docs/components-button-buttonicon--default-story#theme).
          </Markdown>
          <Subheading>Tone</Subheading>
          <Markdown>
            The tone is the same as for the
            [ButtonIcon](/docs/components-button-buttonicon--default-story#theme).
          </Markdown>
        </>
      ),
    },
  },
} satisfies Meta<typeof ButtonIconLink>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

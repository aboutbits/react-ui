import { ButtonLink } from './ButtonLink'
import { Mode, Size, Tone } from '../types'
import { ButtonVariant } from './types'
import IconAdd from '@aboutbits/react-material-icons/dist/IconAdd'
import IconInfo from '@aboutbits/react-material-icons/dist/IconInfo'
import {
  Controls,
  Description,
  Markdown,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'

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
      mapping: { None: undefined, Add: IconAdd, Info: IconInfo },
      control: { type: 'select' },
    },
    iconEnd: {
      options: ['None', 'Add', 'Info'],
      mapping: { None: undefined, Add: IconAdd, Info: IconInfo },
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
            [Button](/docs/components-button-button--default-story#theme).
          </Markdown>
          <Stories />
          <Subheading>Mode</Subheading>
          <Markdown>
            The mode is the same as for the
            [Button](/docs/components-button-button--default-story#size).
          </Markdown>
          <Subheading>Size</Subheading>
          <Markdown>
            The size is the same as for the
            [Button](/docs/components-button-button--default-story#size).
          </Markdown>
          <Subheading>Variants</Subheading>
          <Markdown>
            The variants are the same as for the
            [Button](/docs/components-button-button--default-story#variants).
          </Markdown>
          <Subheading>Tone</Subheading>
          <Markdown>
            The tone is the same as for the
            [Button](/docs/components-button-button--default-story#tone).
          </Markdown>
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

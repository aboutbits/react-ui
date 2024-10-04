import IconBadgeOutlinedFilled from '@aboutbits/react-material-icons/dist/IconBadgeOutlinedFilled'
import IconSearchOutlinedFilled from '@aboutbits/react-material-icons/dist/IconSearchOutlinedFilled'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Mode } from '../types'
import { InputField } from './InputField'
import { FormVariant, Status } from './types'

const meta = {
  component: InputField,
  args: {
    name: 'name',
    label: 'Name',
    placeholder: 'Your Name',
    type: 'text',
    mode: Mode.Light,
    variant: FormVariant.Solid,
    disabled: false,
    iconStart: undefined,
    iconEnd: undefined,
  },
  argTypes: {
    iconStart: {
      options: ['None', 'Search', 'Badge'],
      mapping: {
        None: undefined,
        Search: IconSearchOutlinedFilled,
        Badge: IconBadgeOutlinedFilled,
      },
      control: { type: 'select' },
    },
    iconEnd: {
      options: ['None', 'Search', 'Badge'],
      mapping: {
        None: undefined,
        Search: IconSearchOutlinedFilled,
        Badge: IconBadgeOutlinedFilled,
      },
      control: { type: 'select' },
    },
    hideRequired: { type: 'boolean' },
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
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof InputField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'label',
  },
}

export const WithMessage: Story = {
  args: {
    message: 'This is the message',
  },
}

export const WithLabelAndMessage: Story = {
  args: {
    label: 'Label',
    message: 'This is the message',
  },
}

export const StatusInvalid: Story = {
  args: {
    label: 'Label',
    message: 'This is the message',
    status: Status.Invalid,
  },
}

export const Required: Story = {
  args: {
    label: 'Label',
    message: 'This is the message',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    message: 'This is the message',
    disabled: true,
  },
}

export const WithIconsOutlinedFilled: Story = {
  render: (args) => (
    <div className="flex flex-row space-x-4">
      <InputField {...args} iconStart={IconSearchOutlinedFilled} />
      <InputField {...args} iconEnd={IconBadgeOutlinedFilled} />
    </div>
  ),
}

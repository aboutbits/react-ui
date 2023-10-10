import { Meta, StoryObj } from '@storybook/react'
import { RadioField } from './RadioField'
import { Status } from './types'

const meta = {
  component: RadioField,
  render: (args) => (
    <div className="space-y-4">
      <RadioField {...args} />
      <RadioField {...args} label="Option 2" />
      <RadioField {...args} label="Option 3" />
    </div>
  ),
  args: {
    name: 'example-default',
    label: 'Option 1',
    disabled: false,
  },
} satisfies Meta<typeof RadioField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithMessage: Story = {
  args: {
    name: 'example-with-message',
    label: 'Option 1',
    message: 'This is the message',
  },
}

export const StatusInvalid: Story = {
  args: {
    name: 'example-invalid',
    label: 'Option 1',
    message: 'This is the message',
    status: Status.Invalid, // Assuming Status is defined or imported
  },
}

export const Disabled: Story = {
  args: {
    name: 'example-disabled',
    label: 'Option 1',
    message: 'This is the message',
    disabled: true,
  },
}

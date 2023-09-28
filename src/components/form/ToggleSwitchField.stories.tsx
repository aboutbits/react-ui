import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { ToggleSwitchField } from './ToggleSwitchField'
import { Status } from './types'

const meta = {
  component: ToggleSwitchField,
  args: {
    label: 'Airplane mode',
  },
  argTypes: {
    disabled: { type: 'boolean' },
    required: { type: 'boolean' },
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
} satisfies Meta<typeof ToggleSwitchField>

export default meta

type Story = StoryObj<typeof ToggleSwitchField>

export const Default: Story = {}

export const WithMessage: Story = {
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

export const Disabled: Story = {
  args: {
    label: 'Label',
    message: 'This is the message',
    disabled: true,
  },
}

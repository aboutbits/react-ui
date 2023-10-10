import {
  Controls,
  Description,
  Primary,
  Stories,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { CheckboxField } from './CheckboxField'
import { Status } from './types'

const meta = {
  component: CheckboxField,
  args: {
    label: 'Name',
    disabled: false,
  },
  parameters: {
    args: {
      label: 'Name',
      disabled: false,
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof CheckboxField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithMessage: Story = {
  args: {
    message: 'This is the message',
    label: 'label',
  },
}

export const StatusInvalid: Story = {
  args: {
    status: Status.Invalid,
    message: 'This is the message',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

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
import { TextAreaField } from './TextAreaField'
import { FormVariant, Status } from './types'

const meta = {
  component: TextAreaField,
  args: {
    mode: Mode.Light,
    variant: FormVariant.Solid,
    disabled: false,
    rows: 4,
  },
  argTypes: {
    required: { type: 'boolean' },
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
} satisfies Meta<typeof TextAreaField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Label',
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

export const Disabled: Story = {
  args: {
    label: 'Label',
    message: 'This is the message',
    disabled: true,
  },
}

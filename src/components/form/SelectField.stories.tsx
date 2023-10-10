import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { SelectField } from './SelectField'
import { Option } from './primitive/Option'
import { Status } from './types'

const children = (
  <>
    <Option value="admin"> Admin </Option>
    <Option value="user"> User </Option>
  </>
)

const meta = {
  component: SelectField,
  args: {
    label: 'Role',
    message: 'Your role inside the department',
    children,
  },
  argTypes: {
    disabled: { type: 'boolean' },
    children: { control: { disable: true } },
    status: {
      options: ['undefined', 'invalid'],
      mapping: { undefined, invalid: Status.Invalid },
    },
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
} satisfies Meta<typeof SelectField>

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
    status: Status.Invalid, // Assuming Status is defined or imported
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    message: 'This is the message',
    disabled: true,
  },
}

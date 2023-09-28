import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { FieldSetField } from './FieldSetField'
import { Status } from './types'

const meta = {
  component: FieldSetField,
  args: {
    label: 'Label',
    children: 'FieldSet Content',
  },
  argTypes: {
    disabled: { type: 'boolean' },
    children: { control: { disable: true } },
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
} satisfies Meta<typeof FieldSetField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithMessage: Story = {
  args: {
    label: 'Label',
    children: <>FieldSet Content</>,
    message: 'This is the message',
  },
}

export const StatusInvalid: Story = {
  args: {
    label: 'Label',
    message: 'This is the message',
    status: Status.Invalid,
    children: <>FieldSet Content</>,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    message: 'This is the message',
    disabled: true,
    children: <>FieldSet Content</>,
  },
}

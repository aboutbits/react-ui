import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../../.storybook/components'
import { FormTone, FormVariant } from '../types'
import { Option } from './Option'
import { Select } from './Select'

const meta = {
  component: Select,
  args: {
    children: (
      <>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </>
    ),
  },
  argTypes: {
    disabled: { type: 'boolean' },
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
          <Theme component="form" items={['select']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-row space-x-4">
      <Select {...args} variant={FormVariant.Ghost} />
      <Select {...args} variant={FormVariant.Soft} />
      <Select {...args} variant={FormVariant.Transparent} />
      <Select {...args} variant={FormVariant.Solid} />
    </div>
  ),
}

export const Tone: Story = {
  render: (args) => (
    <div className="flex flex-row space-x-4">
      <Select {...args} tone={FormTone.Neutral} />
      <Select {...args} tone={FormTone.Critical} />
    </div>
  ),
}

export const initialPlaceholder: Story = {
  args: {
    children: (
      <>
        <Option value="" hidden>
          Please select an option
        </Option>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </>
    ),
  },
}

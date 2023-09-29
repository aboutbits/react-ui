import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { FormTone, FormVariant } from '../types'
import { TextArea } from './TextArea'

const meta = {
  component: TextArea,
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    rows: 4,
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
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-row space-x-4">
      <TextArea {...args} variant={FormVariant.Ghost} placeholder="Ghost" />
      <TextArea {...args} variant={FormVariant.Soft} placeholder="Soft" />
      <TextArea
        {...args}
        variant={FormVariant.Transparent}
        placeholder="Transparent"
      />
      <TextArea {...args} variant={FormVariant.Solid} placeholder="Solid" />
    </div>
  ),
}

export const Tones: Story = {
  render: (args) => (
    <div className="flex flex-row space-x-4">
      <TextArea {...args} tone={FormTone.Neutral} placeholder="Neutral" />
      <TextArea {...args} tone={FormTone.Critical} placeholder="Critical" />
    </div>
  ),
}

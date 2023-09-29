import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../../../.storybook/components'
import { Radio } from './Radio'

const meta = {
  component: Radio,
  args: {
    name: 'name',
    label: 'Option 1',
  },
  render: (args) => (
    <div className="space-y-4">
      <Radio {...args} />
      <Radio {...args} label="Option 2" />
      <Radio {...args} label="Option 3" />
    </div>
  ),
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="form" items={['radio']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLongTex: Story = {
  args: {
    name: 'radio-w-long-text',
    label:
      'This radio has a very long text to show the behavior of a line break within the radio component. Adjust the width of the window to see the positioning of the elements within the component.',
  },
}

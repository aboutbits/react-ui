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
import { ToggleSwitch } from './ToggleSwitch'

const meta = {
  component: ToggleSwitch,
  args: {
    name: 'name',
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
          <Theme component="form" items={['toggleSwitch']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof ToggleSwitch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLongText: Story = {
  args: {
    name: 'toggle-switch-w-long-text',
    label:
      'This toggle switch has a very long text to show the behavior of a line break within the toggle switch component. Adjust the width of the window to see the positioning of the elements within the component.',
  },
}

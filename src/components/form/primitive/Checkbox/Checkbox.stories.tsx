import { Meta, StoryObj } from '@storybook/react'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Theme } from '../../../../../.storybook/components'
import { Checkbox } from './Checkbox'

const meta = {
  component: Checkbox,
  args: {
    name: 'name',
    label: 'Accept privacy policy',
    disabled: false,
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
          <Theme component="form" items={['checkbox']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLongMessage: Story = {
  args: {
    name: 'checkbox-w-long-text',
    label:
      'This checkbox has a very long text to show the behavior of a line break within the checkbox component. Adjust the width of the window to see the positioning of the elements within the component.',
  },
}

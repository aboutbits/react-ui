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
import { Option } from './Option'
import { Select } from './Select'
const meta = {
  component: Option,
  args: {
    children: 'Example option',
  },
  argTypes: {
    disabled: { type: 'boolean' },
  },
  decorators: [
    (Story) => (
      <Select>
        <Story />
      </Select>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="form" items={['option']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Option>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

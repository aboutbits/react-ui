import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { SelectYearField } from './SelectYearField'

const meta = {
  component: SelectYearField,
  args: {
    label: 'Year of birth',
    from: 2018,
    to: new Date().getFullYear(),
  },
  argTypes: {
    disabled: { type: 'boolean' },
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
} satisfies Meta<typeof SelectYearField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

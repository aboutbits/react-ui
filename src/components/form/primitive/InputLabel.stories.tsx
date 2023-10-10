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
import { InputLabel } from './InputLabel'

const meta = {
  component: InputLabel,
  args: {
    children: 'Label',
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
          <Theme component="form" items={['inputLabel']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof InputLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

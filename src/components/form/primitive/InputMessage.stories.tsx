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
import { InputMessage } from './InputMessage'

const meta = {
  component: InputMessage,
  args: {
    message: 'Message',
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
          <Theme component="form" items={['inputMessage']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof InputMessage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

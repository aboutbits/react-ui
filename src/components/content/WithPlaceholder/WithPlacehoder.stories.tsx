import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { WithPlaceholder } from './WithPlaceholder'

const children = {
  options: ['null', 'undefined', 'Empty text', 'ReactNode'],
  mapping: {
    null: null,
    undefined: undefined,
    'Empty text': '',
    ReactNode: 'John Doe',
  },
  control: { type: 'select' },
}

const meta = {
  title: 'Components/Content/WithPlaceHolder',
  component: WithPlaceholder,
  args: {
    children: 'John Doe',
    placeholder: '-',
  },
  argTypes: {
    children,
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
} satisfies Meta<typeof WithPlaceholder>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

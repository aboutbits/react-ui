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
  options: ['null', 'undefined', 'empty', 'text'],
  mapping: {
    null: null,
    undefined,
    empty: '',
    text: 'John Doe',
  },
  control: { type: 'select' },
}

const placeholder = {
  options: ['star', 'notFound'],
  mapping: {
    star: '*',
    notFound: 'Not found',
  },
}
const meta = {
  title: 'Components/Content/WithPlaceHolder',
  component: WithPlaceholder,
  args: {
    children: 'Content',
    placeholder: 'Placeholder',
  },
  argTypes: {
    children,
    placeholder,
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

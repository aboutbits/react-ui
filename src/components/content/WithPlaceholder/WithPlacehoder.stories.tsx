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
    'null': null,
    'undefined': undefined,
    'Empty text': '',
    'ReactNode': 'John Doe',
  },
  control: { type: 'select' },
}

const placeholder = {
  options: ['default', 'star', 'notFound'],
  mapping: {
    default: '-',
    star: '*',
    notFound: 'Not found',
  },
}
const meta = {
  title: 'Components/Content/WithPlaceHolder',
  component: WithPlaceholder,
  args: {
    children: 'Content',
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

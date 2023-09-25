import { ContentArea } from './ContentArea'
import { Theme } from '../../../../.storybook/components'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ContentArea,
  args: {
    children: 'Multiple blocks',
  },
  argTypes: {
    children: {
      options: ['Multiple blocks', 'One block'],
      mapping: {
        'Multiple blocks': (
          <>
            <div className="bg-neutral-200">Block A</div>
            <div className="bg-neutral-100">Block B</div>
            <div className="bg-neutral-200">Block C</div>
          </>
        ),
        'One block': <div className="bg-neutral-200">Block A</div>,
      },
      control: { type: 'select' },
    },
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
          <Theme component="content" items={['area']} />
        </>
      ),
    },
  },
} satisfies Meta<typeof ContentArea>

export default meta

type Story = StoryObj<typeof ContentArea>

export const Default: Story = {}

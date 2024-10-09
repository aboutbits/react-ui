import {
  Controls,
  Description,
  Primary,
  Subheading,
  Title,
} from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { FileDropZone } from './FileDropZone'

const meta = {
  component: FileDropZone,
  argTypes: {
    fileTypes: {
      options: ['None', 'pdf', 'jpg, png, gif'],
      control: {
        type: 'select',
      },
      mapping: {
        None: undefined,
        pdf: ['pdf'],
        'jpg, png, gif': ['jpg', 'png', 'gif'],
      },
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
        </>
      ),
    },
  },
} satisfies Meta<typeof FileDropZone>

export default meta
type Story = StoryObj<typeof FileDropZone>

export const Default: Story = {}

import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../.storybook/components'
import { FormError } from './FormError'

const meta = {
  component: FormError,
  args: {
    children: 'Critical message',
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
          <Theme component="form" items={['formError']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof FormError>

export default meta

type Story = StoryObj<typeof FormError>

export const Default: Story = {}

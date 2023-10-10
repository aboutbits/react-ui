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
import { FieldSet } from './index'

const meta = {
  component: FieldSet,
  args: {
    label: 'Label',
    children: <>FieldSet Content</>,
  },
  argTypes: {
    disabled: { type: 'boolean' },
    children: { control: { disable: true } },
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
          <Theme component="form" items={['fieldset']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof FieldSet>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

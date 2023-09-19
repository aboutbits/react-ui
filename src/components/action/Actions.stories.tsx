import {
  Controls,
  Markdown,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonVariant } from '../button'
import { Tone } from '../types'
import { Theme } from '../../../.storybook/components'
import { Actions } from './Actions'

const children = {
  options: ['One button', 'Two buttons'],
  mapping: {
    'One button': <Button>Save</Button>,
    'Two buttons': (
      <>
        <Button tone={Tone.Success}>Save</Button>
        <Button variant={ButtonVariant.Ghost} tone={Tone.Neutral}>
          Cancel
        </Button>
      </>
    ),
  },
  control: { type: 'select' },
}

const meta = {
  component: Actions,
  title: 'Components/Actions/Actions',
  args: {
    children: children.mapping['One button'],
  },
  argTypes: {
    children,
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Markdown>
            The `Actions` component positions children in a flex container. It
            makes sure that there is space between each item and that they stack
            on mobile. This is very handy in a content area or a dialog, where
            you have two buttons next to each other.
          </Markdown>
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="action" />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Actions>

export default meta
type Story = StoryObj<typeof Actions>

export const Default: Story = {}
export const MultipleChildren: Story = {
  args: {
    children: { ...children.mapping['Two buttons'] },
  },
}

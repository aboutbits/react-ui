import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DeleteButton } from './DeleteButton'
import { Size } from './Button'

export default {
  title: 'Components/Button',
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>

const Template: ComponentStory<typeof DeleteButton> = (args) => (
  <DeleteButton {...args} />
)

export const Delete = Template.bind({})
Delete.args = {
  children: 'Click Me!',
}

export const DeleteSize = Template.bind({})
DeleteSize.args = {
  children: 'Click Me!',
  size: Size.sm,
}

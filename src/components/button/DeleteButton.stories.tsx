import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '@aboutbits/react-material-icons/dist/IconDeleteForever'

import { DeleteButton } from './DeleteButton'
import { Size } from './Button'

export default {
  title: 'Components/Button/Delete',
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>

const Template: ComponentStory<typeof DeleteButton> = (args) => (
  <DeleteButton {...args} />
)

export const Delete = Template.bind({})
Delete.args = {
  children: 'Delete Me!',
}

export const DeleteSize = Template.bind({})
DeleteSize.args = {
  children: 'Delete Me!',
  size: Size.sm,
}

export const DeleteIconChange = Template.bind({})
DeleteIconChange.args = {
  children: 'Delete Me!',
  Icon,
}

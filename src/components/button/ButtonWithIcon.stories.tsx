import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '@aboutbits/react-material-icons/dist/IconDeleteForever'

import { ButtonWithIcon } from './ButtonWithIcon'
import { Size } from './Button'

export default {
  title: 'Components/Button/Delete',
  component: ButtonWithIcon,
} as ComponentMeta<typeof ButtonWithIcon>

const Template: ComponentStory<typeof ButtonWithIcon> = (args) => (
  <ButtonWithIcon {...args}>Delete Me!</ButtonWithIcon>
)

export const Delete = Template.bind({})
Delete.args = {}

export const DeleteSize = Template.bind({})
DeleteSize.args = {
  size: Size.sm,
}

export const DeleteIconChange = Template.bind({})
DeleteIconChange.args = {
  Icon: Icon,
}

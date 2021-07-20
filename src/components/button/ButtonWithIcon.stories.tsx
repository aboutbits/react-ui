import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Icon from '@aboutbits/react-material-icons/dist/IconDeleteForever'
import IconForButton from '@aboutbits/react-material-icons/dist/Icon4k'

import { ButtonWithIcon as ButtonWithIconComponent } from './ButtonWithIcon'
import { Size } from './Button'

export default {
  title: 'Components/Button/ButtonWithIcon',
  component: ButtonWithIconComponent,
} as ComponentMeta<typeof ButtonWithIconComponent>

const Template: ComponentStory<typeof ButtonWithIconComponent> = (args) => (
  <ButtonWithIconComponent {...args}>
    I am button with an Icon!
  </ButtonWithIconComponent>
)

export const Default = Template.bind({})
Default.args = {
  Icon,
}

export const IconSize = Template.bind({})
IconSize.args = {
  size: Size.sm,
  Icon,
}

export const DifferentIcon = Template.bind({})
DifferentIcon.args = {
  Icon: IconForButton,
}

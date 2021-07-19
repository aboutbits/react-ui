import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '@aboutbits/react-material-icons/dist/IconDeleteForever'
import IconForButton from '@aboutbits/react-material-icons/dist/Icon4k'

import { ButtonWithIcon as ButtonWithIconComponent } from './ButtonWithIcon'
import { Size } from './Button'

export default {
  title: 'Components/Button/ButtonWithIcon',
  component: ButtonWithIconComponent,
} as ComponentMeta<typeof ButtonWithIconComponent>

const Template: ComponentStory<typeof ButtonWithIconComponent> = (args) => (
  <ButtonWithIconComponent {...args} Icon={Icon}>
    I am button with an Icon!
  </ButtonWithIconComponent>
)

export const ButtonWithIcon = Template.bind({})
ButtonWithIcon.args = {}

export const ButtonWithIconSize = Template.bind({})
ButtonWithIconSize.args = {
  size: Size.sm,
}

export const ButtonWithIconNewIcon = Template.bind({})
ButtonWithIconNewIcon.args = {
  Icon: IconForButton,
}

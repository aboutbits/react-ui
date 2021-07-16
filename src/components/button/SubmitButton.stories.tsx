import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SubmitButton } from './SubmitButton'
import { Size } from './Button'

export default {
  title: 'Components/Button',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
)

export const Submit = Template.bind({})
Submit.args = {
  children: 'Submit!',
  disabled: false,
}

export const SubmitSize = Template.bind({})
SubmitSize.args = {
  children: 'Submit!',
  size: Size.sm,
  disabled: true,
}

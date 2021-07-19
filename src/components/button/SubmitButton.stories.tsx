import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SubmitButton } from './SubmitButton'

export default {
  title: 'Components/Button/Submit',
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

export const Submitting = Template.bind({})
Submitting.args = {
  children: 'Submitting...',
  disabled: true,
}

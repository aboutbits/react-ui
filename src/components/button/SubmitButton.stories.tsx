import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SubmitButton } from './SubmitButton'

export default {
  title: 'Components/Button/Submit',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>

//TODO add formik in default
const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Submit!',
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Submitting...',
  disabled: true,
}

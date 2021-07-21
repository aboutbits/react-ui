//https://tailwindcss.com/docs/animation#pulse
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingInput } from './LoadingItems'

export default {
  title: 'Components/Loading/Input',
  component: LoadingInput,
} as ComponentMeta<typeof LoadingInput>

const Template: ComponentStory<typeof LoadingInput> = (args) => (
  <LoadingInput {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: 'primary',
}

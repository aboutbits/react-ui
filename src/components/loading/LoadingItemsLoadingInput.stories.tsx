//https://tailwindcss.com/docs/animation#pulse
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingInput } from './LoadingItems'

export default {
  title: 'Components/Loading',
  component: LoadingInput,
} as ComponentMeta<typeof LoadingInput>

const Template: ComponentStory<typeof LoadingInput> = (args) => (
  <LoadingInput {...args} />
)

export const LoadingItemsInput = Template.bind({})
LoadingItemsInput.args = {}

export const LoadingItemsInputTonePrimary = Template.bind({})
LoadingItemsInputTonePrimary.args = {
  tone: 'primary',
}

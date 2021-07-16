import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingBar as LoadingBarComponent } from './LoadingBar'

export default {
  title: 'Components/Loading',
  component: LoadingBarComponent,
} as ComponentMeta<typeof LoadingBarComponent>

const Template: ComponentStory<typeof LoadingBarComponent> = (args) => (
  <LoadingBarComponent className="p-4" {...args} />
)

export const LoadingBar = Template.bind({})
LoadingBar.args = {}

export const LoadingBarTonePrimary = Template.bind({})
LoadingBarTonePrimary.args = {
  tone: 'primary',
}

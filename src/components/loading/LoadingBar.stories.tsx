import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingBar as LoadingBarComponent } from './LoadingBar'

export default {
  title: 'Components/Loading',
  component: LoadingBarComponent,
} as ComponentMeta<typeof LoadingBarComponent>

const Template: ComponentStory<typeof LoadingBarComponent> = (args) => (
  <LoadingBarComponent {...args} />
)

export const LoadingBar = Template.bind({})
LoadingBar.args = {
  className: 'p-4',
}

export const LoadingBarTonePrimary = Template.bind({})
LoadingBarTonePrimary.args = {
  tone: 'primary',
  className: 'p-4',
}

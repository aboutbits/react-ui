import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingBar as LoadingBarComponent } from './LoadingBar'

export default {
  title: 'Components/Loading/Bar',
  component: LoadingBarComponent,
} as ComponentMeta<typeof LoadingBarComponent>

const Template: ComponentStory<typeof LoadingBarComponent> = (args) => (
  <LoadingBarComponent className="p-4" {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: 'primary',
}

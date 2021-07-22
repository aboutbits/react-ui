import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingBar as LoadingBarComponent } from './LoadingBar'

export default {
  title: 'Components/Loading/LoadingBar',
  component: LoadingBarComponent,
} as ComponentMeta<typeof LoadingBarComponent>

const Template: ComponentStory<typeof LoadingBarComponent> = (args) => (
  <LoadingBarComponent className="p-4" {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const BackgroundColorPrimary = Template.bind({})
BackgroundColorPrimary.args = {
  backgroundColor: 'primary',
}

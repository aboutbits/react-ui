import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingBar } from './LoadingBar'

export default {
  title: 'Components/LoadingBar',
  component: LoadingBar,
} as ComponentMeta<typeof LoadingBar>

const Template: ComponentStory<typeof LoadingBar> = (args) => (
  <LoadingBar {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: 'primary',
}

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
Default.args = {
  className: 'p-2 w-40',
}

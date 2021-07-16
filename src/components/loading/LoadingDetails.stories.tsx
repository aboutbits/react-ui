import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingDetails } from './LoadingDetails'

export default {
  title: 'Components/LoadingDetail',
  component: LoadingDetails,
} as ComponentMeta<typeof LoadingDetails>

const Template: ComponentStory<typeof LoadingDetails> = (args) => (
  <LoadingDetails {...args} />
)

export const Default = Template.bind({})
Default.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
}

export const ToneBackground = Template.bind({})
ToneBackground.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
  tone_background: 'critical',
}

export const ToneElements = Template.bind({})
ToneElements.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
  tone_elements: 'green',
}

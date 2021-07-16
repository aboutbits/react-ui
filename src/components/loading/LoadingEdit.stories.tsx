import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingEdit } from './LoadingEdit'

export default {
  title: 'Components/LoadingEdit',
  component: LoadingEdit,
} as ComponentMeta<typeof LoadingEdit>

const Template: ComponentStory<typeof LoadingEdit> = (args) => (
  <LoadingEdit {...args} />
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

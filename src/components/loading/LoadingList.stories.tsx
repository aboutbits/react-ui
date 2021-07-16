//https://tailwindcss.com/docs/animation#pulse
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingList } from './LoadingList'

export default {
  title: 'Components/LoadingList',
  component: LoadingList,
} as ComponentMeta<typeof LoadingList>

const Template: ComponentStory<typeof LoadingList> = (args) => (
  <LoadingList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
  tone_background: 'primary-900',
  tone_elements: 'primary-400',
}

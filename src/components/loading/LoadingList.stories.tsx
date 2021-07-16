//https://tailwindcss.com/docs/animation#pulse
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingList as LoadingListComponent } from './LoadingList'

export default {
  title: 'Components/Loading',
  component: LoadingListComponent,
} as ComponentMeta<typeof LoadingListComponent>

const Template: ComponentStory<typeof LoadingListComponent> = (args) => (
  <LoadingListComponent
    numberOfItems={2}
    sectionHeader={'Change me!'}
    {...args}
  />
)

export const LoadingList = Template.bind({})
LoadingList.args = {}

export const LoadingListTonePrimary = Template.bind({})
LoadingListTonePrimary.args = {
  toneSectionBackground: 'primary-900',
  toneElements: 'primary-400',
}

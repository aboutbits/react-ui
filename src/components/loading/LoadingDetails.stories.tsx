import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingDetails as LoadingDetailsComponent } from './LoadingDetails'

export default {
  title: 'Components/Loading',
  component: LoadingDetailsComponent,
} as ComponentMeta<typeof LoadingDetailsComponent>

const Template: ComponentStory<typeof LoadingDetailsComponent> = (args) => (
  <LoadingDetailsComponent {...args} />
)

export const LoadingDetails = Template.bind({})
LoadingDetails.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
}

export const LoadingDetailsToneBackground = Template.bind({})
LoadingDetailsToneBackground.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
  toneBackground: 'critical',
}

export const LoadingDetailsToneElements = Template.bind({})
LoadingDetailsToneElements.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
  toneElements: 'green',
}

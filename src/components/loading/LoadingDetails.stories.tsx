import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingDetails as LoadingDetailsComponent } from './LoadingDetails'

export default {
  title: 'Components/Loading/Details',
  component: LoadingDetailsComponent,
} as ComponentMeta<typeof LoadingDetailsComponent>

const Template: ComponentStory<typeof LoadingDetailsComponent> = (args) => (
  <LoadingDetailsComponent
    {...args}
    numberOfItems={2}
    sectionHeader={'Section header'}
  />
)

export const Default = Template.bind({})
Default.args = {}

export const ToneBackground = Template.bind({})
ToneBackground.args = {
  toneSectionBackground: 'critical',
}

export const ToneElements = Template.bind({})
ToneElements.args = {
  toneLoadingBar: 'green',
}

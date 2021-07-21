import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingEdit as LoadingEditComponent } from './LoadingEdit'

export default {
  title: 'Components/Loading/Edit',
  component: LoadingEditComponent,
} as ComponentMeta<typeof LoadingEditComponent>

const Template: ComponentStory<typeof LoadingEditComponent> = (args) => (
  <LoadingEditComponent
    sectionHeader={'Change me!'}
    {...args}
    numberOfItems={2}
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

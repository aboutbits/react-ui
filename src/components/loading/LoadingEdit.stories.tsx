import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingEdit as LoadingEditComponent } from './LoadingEdit'

export default {
  title: 'Components/Loading',
  component: LoadingEditComponent,
} as ComponentMeta<typeof LoadingEditComponent>

const Template: ComponentStory<typeof LoadingEditComponent> = (args) => (
  <LoadingEditComponent
    numberOfItems={2}
    sectionHeader={'Change me!'}
    {...args}
  />
)

export const LoadingEdit = Template.bind({})
LoadingEdit.args = {}

export const LoadingEditToneBackground = Template.bind({})
LoadingEditToneBackground.args = {
  toneSectionBackground: 'critical',
}

export const LoadingEditToneElements = Template.bind({})
LoadingEditToneElements.args = {
  toneElements: 'green',
}

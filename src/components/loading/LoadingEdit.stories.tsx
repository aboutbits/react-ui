import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingEdit as LoadingEditComponent } from './LoadingEdit'

export default {
  title: 'Components/Loading',
  component: LoadingEditComponent,
} as ComponentMeta<typeof LoadingEditComponent>

const Template: ComponentStory<typeof LoadingEditComponent> = (args) => (
  <LoadingEditComponent {...args} />
)

export const LoadingEdit = Template.bind({})
LoadingEdit.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
}

export const LoadingEditToneBackground = Template.bind({})
LoadingEditToneBackground.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
  tone_background: 'critical',
}

export const LoadingEditToneElements = Template.bind({})
LoadingEditToneElements.args = {
  numberOfItems: 2,
  sectionHeader: 'Change me!',
  tone_elements: 'green',
}

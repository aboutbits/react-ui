import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingEdit as LoadingEditComponent } from './LoadingEdit'

export default {
  title: 'Components/Loading/LoadingEdit',
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

export const ColorSectionBackground = Template.bind({})
ColorSectionBackground.args = {
  colorSectionBackground: 'critical',
}

export const ColorLoadingBar = Template.bind({})
ColorLoadingBar.args = {
  colorLoadingBar: 'green',
}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingDetails as LoadingDetailsComponent } from './LoadingDetails'

export default {
  title: 'Components/Loading/LoadingDetails',
  component: LoadingDetailsComponent,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
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

export const ColorSectionBackground = Template.bind({})
ColorSectionBackground.args = {
  colorSectionBackground: 'critical',
}

export const ColorLoadingBar = Template.bind({})
ColorLoadingBar.args = {
  colorLoadingBar: 'green',
}

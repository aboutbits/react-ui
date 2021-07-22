import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingList as LoadingListComponent } from './LoadingList'

export default {
  title: 'Components/Loading/LoadingList',
  component: LoadingListComponent,
} as ComponentMeta<typeof LoadingListComponent>

const Template: ComponentStory<typeof LoadingListComponent> = (args) => (
  <LoadingListComponent
    sectionHeader={'Change me!'}
    {...args}
    numberOfItems={2}
  />
)

export const Default = Template.bind({})
Default.args = {}

export const ColorPrimary = Template.bind({})
ColorPrimary.args = {
  colorSectionBackground: 'primary',
  colorLoadingBar: 'primary-100',
}

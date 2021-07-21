//https://tailwindcss.com/docs/animation#pulse
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingList as LoadingListComponent } from './LoadingList'

export default {
  title: 'Components/Loading/List',
  component: LoadingListComponent,
} as ComponentMeta<typeof LoadingListComponent>

const Template: ComponentStory<typeof LoadingListComponent> = (args) => (
  <LoadingListComponent sectionHeader={'Change me!'} {...args} />
)

export const Default = Template.bind({})
Default.args = {
  numberOfItems: 2,
}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  toneSectionBackground: 'primary',
  toneLoadingBar: 'primary-100',
  numberOfItems: 2,
}

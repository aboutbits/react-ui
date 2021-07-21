import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionContentList as SectionContentListComponent } from './SectionContentList'
import { Tone } from '../../button/Button'

export default {
  title: 'Components/Section/SectionContentList',
  component: SectionContentListComponent,
} as ComponentMeta<typeof SectionContentListComponent>

const Template: ComponentStory<typeof SectionContentListComponent> = (args) => (
  <SectionContentListComponent {...args}>
    I am a Section!
  </SectionContentListComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: Tone.primary,
}

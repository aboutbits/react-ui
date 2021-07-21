import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListEmpty as SectionListEmptyComponent } from './SectionList'
import { Tone } from '../../button/Button'

export default {
  title: 'Components/Section/List Empty',
  component: SectionListEmptyComponent,
} as ComponentMeta<typeof SectionListEmptyComponent>

const Template: ComponentStory<typeof SectionListEmptyComponent> = (args) => (
  <SectionListEmptyComponent {...args}>Empty!</SectionListEmptyComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: Tone.primary,
}

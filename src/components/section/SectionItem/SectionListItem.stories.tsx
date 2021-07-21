import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListItem as SectionListItemComponent } from './SectionItem'
import { Tone } from '../../button/Button'

export default {
  title: 'Components/Section/List Item',
  component: SectionListItemComponent,
} as ComponentMeta<typeof SectionListItemComponent>

const Template: ComponentStory<typeof SectionListItemComponent> = (args) => (
  <SectionListItemComponent {...args}>
    I am a Section Item!
  </SectionListItemComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: Tone.primary,
}

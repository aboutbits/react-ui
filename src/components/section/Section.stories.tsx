import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SectionComponent from './Section'
import { Tone } from '../button/Button'

export default {
  title: 'Components/Section/Section',
  component: SectionComponent,
} as ComponentMeta<typeof SectionComponent>

const Template: ComponentStory<typeof SectionComponent> = (args) => (
  <SectionComponent {...args}>I am a Section!</SectionComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: Tone.primary,
}

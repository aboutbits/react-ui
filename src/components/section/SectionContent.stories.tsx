import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionContent as SectionContentComponent } from './Section'
import { Tone } from '../button/Button'

export default {
  title: 'Components/Section/SectionContent',
  component: SectionContentComponent,
} as ComponentMeta<typeof SectionContentComponent>

const Template: ComponentStory<typeof SectionContentComponent> = (args) => (
  <SectionContentComponent {...args}>I am a Section!</SectionContentComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: Tone.primary,
}

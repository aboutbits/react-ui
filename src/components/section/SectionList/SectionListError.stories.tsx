import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListError as SectionListErrorComponent } from './SectionList'
import { Tone } from '../../button/Button'

export default {
  title: 'Components/Section/List Error',
  component: SectionListErrorComponent,
} as ComponentMeta<typeof SectionListErrorComponent>

const Template: ComponentStory<typeof SectionListErrorComponent> = (args) => (
  <SectionListErrorComponent {...args}>Error!</SectionListErrorComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: Tone.primary,
}

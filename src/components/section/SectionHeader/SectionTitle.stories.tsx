import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionTitle as SectionTitleComponent } from './SectionHeader'

export default {
  title: 'Components/Section/Title',
  component: SectionTitleComponent,
} as ComponentMeta<typeof SectionTitleComponent>

const Template: ComponentStory<typeof SectionTitleComponent> = (args) => (
  <SectionTitleComponent {...args}>I am a Section title!</SectionTitleComponent>
)

export const Default = Template.bind({})
Default.args = {}

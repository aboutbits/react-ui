import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionHeader as SectionHeaderComponent } from './SectionHeader'

export default {
  title: 'Components/Section/SectionHeader',
  component: SectionHeaderComponent,
} as ComponentMeta<typeof SectionHeaderComponent>

const Template: ComponentStory<typeof SectionHeaderComponent> = (args) => (
  <SectionHeaderComponent {...args}>I am a Section!</SectionHeaderComponent>
)

export const Default = Template.bind({})
Default.args = {}

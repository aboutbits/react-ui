import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SectionComponent from './Section'

export default {
  title: 'Components/Section/Base',
  component: SectionComponent,
} as ComponentMeta<typeof SectionComponent>

const Template: ComponentStory<typeof SectionComponent> = (args) => (
  <SectionComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'I am a Section!',
}

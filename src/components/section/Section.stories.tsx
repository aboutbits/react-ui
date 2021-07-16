import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Section as SectionComponent } from './Section'

export default {
  title: 'Components/Section',
  component: SectionComponent,
} as ComponentMeta<typeof SectionComponent>

const Template: ComponentStory<typeof SectionComponent> = (args) => (
  <SectionComponent {...args} />
)

export const Section = Template.bind({})
Section.args = {
  children: 'I am a section!',
}

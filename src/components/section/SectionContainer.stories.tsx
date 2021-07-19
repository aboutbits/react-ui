import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionContainer as SectionContainerComponent } from './Section'

export default {
  title: 'Components/Section',
  component: SectionContainerComponent,
} as ComponentMeta<typeof SectionContainerComponent>

const Template: ComponentStory<typeof SectionContainerComponent> = (args) => (
  <SectionContainerComponent {...args}>
    I am a section container!
  </SectionContainerComponent>
)

export const SectionContainer = Template.bind({})
SectionContainer.args = {}

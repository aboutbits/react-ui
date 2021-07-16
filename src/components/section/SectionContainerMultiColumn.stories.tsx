import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionContainerMultiColumn as SectionContainerMultiColumnComponent } from './Section'

export default {
  title: 'Components/Section',
  component: SectionContainerMultiColumnComponent,
} as ComponentMeta<typeof SectionContainerMultiColumnComponent>

const Template: ComponentStory<typeof SectionContainerMultiColumnComponent> = (
  args
) => <SectionContainerMultiColumnComponent {...args} />

export const SectionContainerMultiColumn = Template.bind({})
SectionContainerMultiColumn.args = {
  children: 'I am a SectionContainerMultiColumn!',
  tone: 'white',
}

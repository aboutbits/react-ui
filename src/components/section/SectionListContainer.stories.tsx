import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListContainer as SectionListContainerComponent } from './Section'

export default {
  title: 'Components/Section',
  component: SectionListContainerComponent,
} as ComponentMeta<typeof SectionListContainerComponent>

const Template: ComponentStory<typeof SectionListContainerComponent> = (
  args
) => <SectionListContainerComponent {...args} />

export const SectionListContainer = Template.bind({})
SectionListContainer.args = {
  children: 'I am a section list container!',
  tone: 'gray-300',
}

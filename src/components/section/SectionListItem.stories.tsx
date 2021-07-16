import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListItem as SectionListItemComponent } from './SectionItem'

export default {
  title: 'Components/Section',
  component: SectionListItemComponent,
} as ComponentMeta<typeof SectionListItemComponent>

const Template: ComponentStory<typeof SectionListItemComponent> = (args) => (
  <SectionListItemComponent {...args} />
)

export const SectionListItem = Template.bind({})
SectionListItem.args = {
  children: 'I am a section list item!',
}

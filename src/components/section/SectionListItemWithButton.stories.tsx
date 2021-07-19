import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListItemWithButton as SectionListItemWithButtonComponent } from './SectionItem'

export default {
  title: 'Components/Section',
  component: SectionListItemWithButtonComponent,
} as ComponentMeta<typeof SectionListItemWithButtonComponent>

const Template: ComponentStory<typeof SectionListItemWithButtonComponent> = (
  args
) => (
  <SectionListItemWithButtonComponent {...args}>
    I am a Section List Item With Button Component!
  </SectionListItemWithButtonComponent>
)

export const SectionListItemWithButton = Template.bind({})
SectionListItemWithButton.args = {}

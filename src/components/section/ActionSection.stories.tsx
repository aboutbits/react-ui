import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ActionSection as ActionSectionComponent } from './Section'

export default {
  title: 'Components/Section',
  component: ActionSectionComponent,
} as ComponentMeta<typeof ActionSectionComponent>

const Template: ComponentStory<typeof ActionSectionComponent> = (args) => (
  <ActionSectionComponent {...args}>
    I am a action container!
  </ActionSectionComponent>
)

export const ActionSection = Template.bind({})
ActionSection.args = {}

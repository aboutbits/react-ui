import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListItemWithButton as SectionListItemWithButtonComponent } from './SectionItem'

export default {
  title: 'Components/Section/List Item With Button',
  component: SectionListItemWithButtonComponent,
} as ComponentMeta<typeof SectionListItemWithButtonComponent>

const Template: ComponentStory<typeof SectionListItemWithButtonComponent> = (
  args
) => (
  <SectionListItemWithButtonComponent
    {...args}
    onClick={() => {
      alert('Button was clicked!')
    }}
  >
    I am a Section List Item With Button!
  </SectionListItemWithButtonComponent>
)

export const Default = Template.bind({})
Default.args = {}

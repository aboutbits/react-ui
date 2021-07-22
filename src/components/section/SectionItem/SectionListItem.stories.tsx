import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListItem as SectionListItemComponent } from './SectionItem'
import { Tone } from '../../button/Button'
import { SectionContentList } from '../Section/SectionContentList'

export default {
  title: 'Components/Section/SectionListItem',
  component: SectionListItemComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an HTML-div element and applies basic padding styling.<br>' +
          'Usually, it is used in combination with SectionContentList to visualise a list.',
      },
    },
  },
} as ComponentMeta<typeof SectionListItemComponent>

const Template: ComponentStory<typeof SectionListItemComponent> = (args) => (
  <SectionContentList>
    <SectionListItemComponent {...args}>Element 1</SectionListItemComponent>
    <SectionListItemComponent {...args}>Element 2</SectionListItemComponent>
    <SectionListItemComponent {...args}>Element 3</SectionListItemComponent>
  </SectionContentList>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  backgroundColor: Tone.primary,
}

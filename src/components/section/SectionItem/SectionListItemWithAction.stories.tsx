import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListItemWithAction as SectionListItemWithActionComponent } from './SectionItem'
import { Tone } from '../../button/Button'
import IconTimer from '@aboutbits/react-material-icons/dist/IconTimer'

export default {
  title: 'Components/Section/List Item With Action',
  component: SectionListItemWithActionComponent,
} as ComponentMeta<typeof SectionListItemWithActionComponent>

const Template: ComponentStory<typeof SectionListItemWithActionComponent> = (
  args
) => (
  <SectionListItemWithActionComponent {...args}>
    I am Section List Item With Action!
  </SectionListItemWithActionComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: Tone.primary,
}

export const Icon = Template.bind({})
Icon.args = {
  actionIcon: (
    <div className="w-4 h-4">
      <IconTimer />
    </div>
  ),
}

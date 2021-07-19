import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '@aboutbits/react-material-icons/dist/Icon3k'

import { SectionListItemWithAction as SectionListItemWithActionComponent } from './SectionItem'

export default {
  title: 'Components/Section',
  component: SectionListItemWithActionComponent,
} as ComponentMeta<typeof SectionListItemWithActionComponent>

const Template: ComponentStory<typeof SectionListItemWithActionComponent> = (
  args
) => (
  <SectionListItemWithActionComponent {...args}>
    I am a Section List Item With Action Component!
  </SectionListItemWithActionComponent>
)

export const SectionListItemWithAction = Template.bind({})
SectionListItemWithAction.args = {
  actionIcon: (
    <div className="w-4">
      <Icon />
    </div>
  ),
}

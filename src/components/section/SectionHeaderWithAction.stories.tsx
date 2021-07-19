import React from 'react'
import Icon from '@aboutbits/react-material-icons/dist/Icon3k'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionHeaderWithAction as SectionHeaderWithActionComponent } from './SectionHeader'

export default {
  title: 'Components/Section',
  component: SectionHeaderWithActionComponent,
} as ComponentMeta<typeof SectionHeaderWithActionComponent>

const Template: ComponentStory<typeof SectionHeaderWithActionComponent> = (
  args
) => (
  <SectionHeaderWithActionComponent {...args}>
    I am a section header with action component!
  </SectionHeaderWithActionComponent>
)

export const SectionHeaderWithAction = Template.bind({})
SectionHeaderWithAction.args = {
  title: 'test',
  actionIcon: (
    <div className="w-4">
      <Icon />
    </div>
  ),
}

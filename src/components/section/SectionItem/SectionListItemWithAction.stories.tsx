import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListItemWithAction as SectionListItemWithActionComponent } from './SectionItem'
import { Tone } from '../../button/Button'
import IconTimer from '@aboutbits/react-material-icons/dist/IconTimer'
import { SectionContentList } from '../Section/SectionContentList'

export default {
  title: 'Components/Section/SectionListItemWithAction',
  component: SectionListItemWithActionComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an `SectionListItem` and applies basic styling.',
      },
    },
  },
} as ComponentMeta<typeof SectionListItemWithActionComponent>

const Template: ComponentStory<typeof SectionListItemWithActionComponent> = (
  args
) => (
  <SectionContentList>
    <SectionListItemWithActionComponent {...args}>
      Element 1
    </SectionListItemWithActionComponent>
    <SectionListItemWithActionComponent {...args}>
      Element 2
    </SectionListItemWithActionComponent>
    <SectionListItemWithActionComponent {...args}>
      Element 3
    </SectionListItemWithActionComponent>
  </SectionContentList>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  backgroundColor: Tone.primary,
}

export const Icon = Template.bind({})
Icon.args = {
  actionIcon: (
    <IconTimer width="24" height="24" className="fill-current text-white" />
  ),
}

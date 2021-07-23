import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionHeaderWithAction as SectionHeaderWithActionComponent } from './SectionHeader'
import IconAccessTime from '@aboutbits/react-material-icons/dist/IconAccessTime'

export default {
  title: 'Components/Section/SectionHeaderWithAction',
  component: SectionHeaderWithActionComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an `SectionHeader` with a `SectionTile` and an `Icon` and applies basic positioning. <br> ',
      },
    },
  },
} as ComponentMeta<typeof SectionHeaderWithActionComponent>

const Template: ComponentStory<typeof SectionHeaderWithActionComponent> = (
  args
) => (
  <SectionHeaderWithActionComponent {...args} title={'Profile information'} />
)

export const Default = Template.bind({})
Default.args = {}

export const Icon = Template.bind({})
Icon.args = {
  action: <IconAccessTime width="24" height="24" />,
}

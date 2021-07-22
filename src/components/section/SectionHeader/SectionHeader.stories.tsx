import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  SectionHeader as SectionHeaderComponent,
  SectionTitle,
} from './SectionHeader'

export default {
  title: 'Components/Section/SectionHeader',
  component: SectionHeaderComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an HTML-div element and applies basic padding to it. <br> ' +
          'Usually, it is used to define the header of a section.',
      },
    },
  },
} as ComponentMeta<typeof SectionHeaderComponent>

const Template: ComponentStory<typeof SectionHeaderComponent> = (args) => (
  <SectionHeaderComponent {...args}>
    <SectionTitle>Profile information</SectionTitle>
  </SectionHeaderComponent>
)

export const Default = Template.bind({})
Default.args = {}

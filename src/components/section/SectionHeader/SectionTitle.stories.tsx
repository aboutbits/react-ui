import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionTitle as SectionTitleComponent } from './SectionHeader'

export default {
  title: 'Components/Section/SectionTitle',
  component: SectionTitleComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds a HTML-h1 element and applies some basic text styling.',
      },
    },
  },
} as ComponentMeta<typeof SectionTitleComponent>

const Template: ComponentStory<typeof SectionTitleComponent> = (args) => (
  <SectionTitleComponent {...args}>Profile information</SectionTitleComponent>
)

export const Default = Template.bind({})
Default.args = {}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionDescriptionItem as SectionDescriptionItemComponent } from './SectionItem'

export default {
  title: 'Components/Section/SectionDescriptionItem',
  component: SectionDescriptionItemComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an HTML-section element and applies a border on the bottom.<br>' +
          'Usually, it is used in combination with SectionContent.',
      },
    },
  },
} as ComponentMeta<typeof SectionDescriptionItemComponent>

const Template: ComponentStory<typeof SectionDescriptionItemComponent> = (
  args
) => (
  <SectionDescriptionItemComponent
    {...args}
    content="admin@aboutbits.it"
    title="E-mail"
    className="text-gray p-2"
  />
)

export const Default = Template.bind({})
Default.args = {}

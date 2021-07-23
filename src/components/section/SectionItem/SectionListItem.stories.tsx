import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListItem as SectionListItemComponent } from './SectionItem'

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

const Template: ComponentStory<typeof SectionListItemComponent> = ({
  children = 'john.doe@aboutbits.it',
  ...args
}) => <SectionListItemComponent {...args}>{children}</SectionListItemComponent>

export const Default = Template.bind({})
Default.args = {}

export const CustomCss = Template.bind({})
CustomCss.args = {
  className: 'bg-primary',
}

export const LongContent = Template.bind({})

LongContent.args = {
  children:
    "This is a very long text. This text should wrap on screens very it doesn't fit in one line.",
}

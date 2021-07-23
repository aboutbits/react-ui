import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IconEmail from '@aboutbits/react-material-icons/dist/IconEmail'
import IconCopyAll from '@aboutbits/react-material-icons/dist/IconCopyAll'

import { SectionListItemWithAction as SectionListItemWithActionComponent } from './SectionItem'

export default {
  title: 'Components/Section/SectionListItemWithAction',
  component: SectionListItemWithActionComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component is based the SectionListItem. It will place the `children` on left side and the `action` on the right side.',
      },
    },
  },
} as ComponentMeta<typeof SectionListItemWithActionComponent>

const Template: ComponentStory<typeof SectionListItemWithActionComponent> = ({
  children,
  ...args
}) => (
  <SectionListItemWithActionComponent {...args}>
    {children}
  </SectionListItemWithActionComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'john.doe@aboutbits.it',
  action: <IconEmail width="24" height="24" className="fill-current" />,
}

export const LongText = Template.bind({})
LongText.args = {
  children:
    'This list item has a very long text. The text should wrap, there should be a space between text and action. And the action should not shrink.',
  action: <IconCopyAll width="24" height="24" className="fill-current" />,
}

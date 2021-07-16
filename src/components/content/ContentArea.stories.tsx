import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ContentArea } from './ContentArea'

export default {
  title: 'Components/ContentArea',
  component: ContentArea,
} as ComponentMeta<typeof ContentArea>

const Template: ComponentStory<typeof ContentArea> = (args) => (
  <ContentArea {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'I am a ContentArea!',
}

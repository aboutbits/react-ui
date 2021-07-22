//https://tailwindcss.com/docs/animation#pulse
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingField } from './LoadingItems'

export default {
  title: 'Components/Loading/ItemsField',
  component: LoadingField,
} as ComponentMeta<typeof LoadingField>

const Template: ComponentStory<typeof LoadingField> = (args) => (
  <LoadingField {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const BackgroundColorPrimary = Template.bind({})
BackgroundColorPrimary.args = {
  backgroundColor: 'primary',
}

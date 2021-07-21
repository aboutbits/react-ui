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

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: 'primary',
}

export const VariantError = Template.bind({})
VariantError.args = {
  variant: 'error',
}

export const VariantLoaded = Template.bind({})
VariantLoaded.args = {
  variant: 'loaded',
}

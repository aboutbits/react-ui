//https://tailwindcss.com/docs/animation#pulse
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingField } from './LoadingItems'

export default {
  title: 'Components/Loading',
  component: LoadingField,
} as ComponentMeta<typeof LoadingField>

const Template: ComponentStory<typeof LoadingField> = (args) => (
  <LoadingField {...args} />
)

export const LoadingItemsField = Template.bind({})
LoadingItemsField.args = {}

export const LoadingItemsFieldTonePrimary = Template.bind({})
LoadingItemsFieldTonePrimary.args = {
  tone: 'primary',
}

export const LoadingItemsFieldVariantError = Template.bind({})
LoadingItemsFieldVariantError.args = {
  variant: 'error',
}

export const LoadingItemsFieldVariantLoaded = Template.bind({})
LoadingItemsFieldVariantLoaded.args = {
  variant: 'loaded',
}

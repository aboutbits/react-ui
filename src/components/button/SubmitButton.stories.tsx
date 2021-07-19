import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SubmitButton } from './SubmitButton'
import { Variant, Tone } from './Button'

export default {
  title: 'Components/Button/Submit',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Submit!',
  disabled: false,
}

export const VariantSolid = Template.bind({})
VariantSolid.args = {
  children: 'Submit',
  variant: Variant.solid,
}

export const VariantGhost = Template.bind({})
VariantGhost.args = {
  children: 'Submit!',
  variant: Variant.ghost,
}

export const VariantTransparent = Template.bind({})
VariantTransparent.args = {
  children: 'Submit!',
  variant: Variant.transparent,
}

export const TonePrime = Template.bind({})
TonePrime.args = {
  children: 'Submit!',
  tone: Tone.primary,
}

export const ToneCustom = Template.bind({})
ToneCustom.args = {
  children: 'Submit!',
  tone: 'green',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Submitting...',
  disabled: true,
}

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button, Tone, Variant } from './Button'

export default {
  title: 'Components/Button/Base',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Click Me!',
}

export const VarianSolid = Template.bind({})
VarianSolid.args = {
  children: 'Click Me!',
  variant: Variant.solid,
}

export const VariantGhost = Template.bind({})
VariantGhost.args = {
  children: 'Click Me!',
  variant: Variant.ghost,
}

export const VariantGhostToneSecondary = Template.bind({})
VariantGhostToneSecondary.args = {
  variant: Variant.ghost,
  tone: Tone.secondary,
  children: 'Click Me!',
}

export const VariantTransparent = Template.bind({})
VariantTransparent.args = {
  children: 'Click Me!',
  variant: Variant.transparent,
}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  children: 'Click Me!',
  tone: Tone.primary,
}

export const ToneSecondary = Template.bind({})
ToneSecondary.args = {
  children: 'Click Me!',
  tone: Tone.secondary,
}

export const ToneCritical = Template.bind({})
ToneCritical.args = {
  children: 'Click Me!',
  tone: Tone.critical,
}

export const ToneCustom = Template.bind({})
ToneCustom.args = {
  children: 'Click Me!',
  tone: 'green',
}

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button, Tone, Variant } from './Button'

export default {
  title: 'Components/Button/Base',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click Me!</Button>
)

export const Default = Template.bind({})
Default.args = {}

export const VarianSolid = Template.bind({})
VarianSolid.args = {
  variant: Variant.solid,
}

export const VariantGhost = Template.bind({})
VariantGhost.args = {
  variant: Variant.ghost,
}

export const VariantTransparent = Template.bind({})
VariantTransparent.args = {
  variant: Variant.transparent,
}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: Tone.primary,
}

export const ToneSecondary = Template.bind({})
ToneSecondary.args = {
  children: 'Click Me!',
  tone: Tone.secondary,
}

export const ToneCritical = Template.bind({})
ToneCritical.args = {
  tone: Tone.critical,
}

export const ToneCustom = Template.bind({})
ToneCustom.args = {
  tone: 'green',
}

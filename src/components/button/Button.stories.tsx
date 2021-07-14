import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, Tone, Variant } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Click Me!',
}

export const Ghost = Template.bind({})
Ghost.args = {
  children: 'Click Me!',
  variant: Variant.ghost,
}

export const Transparent = Template.bind({})
Transparent.args = {
  children: 'Click Me!',
  variant: Variant.transparent,
}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  children: 'Click Me!',
  tone: Tone.primary,
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

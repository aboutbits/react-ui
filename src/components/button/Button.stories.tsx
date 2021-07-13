import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, Size, Variant } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Click Me!',
  variant: Variant.primary,
  size: Size.md,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Click Me!',
  variant: Variant.secondary,
  size: Size.md,
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'Delete',
  variant: Variant.danger,
  size: Size.md,
}

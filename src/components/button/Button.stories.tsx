import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, Variant } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  variant: Variant.primary,
}

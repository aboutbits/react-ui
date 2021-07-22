import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingInput } from './LoadingItems'

export default {
  title: 'Components/Loading/LoadingInput',
  component: LoadingInput,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as ComponentMeta<typeof LoadingInput>

const Template: ComponentStory<typeof LoadingInput> = (args) => (
  <LoadingInput {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const BackgroundColorPrimary = Template.bind({})
BackgroundColorPrimary.args = {
  backgroundColor: 'primary',
}

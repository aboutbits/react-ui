import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionContent as SectionContentComponent } from './SectionContent'
import { Tone } from '../../button/Button'

export default {
  title: 'Components/Section/SectionContent',
  component: SectionContentComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an HTML-div element and applies basic padding to it. <br> ' +
          'It is used to group non section elements within a section.',
      },
    },
  },
} as ComponentMeta<typeof SectionContentComponent>

const Template: ComponentStory<typeof SectionContentComponent> = (args) => (
  <SectionContentComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  backgroundColor: Tone.primary,
}

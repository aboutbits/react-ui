import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Section as SectionComponent } from './Section'
import { Tone } from '../../button/Button'

export default {
  title: 'Components/Section/Section',
  component: SectionComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an HTML-section element and applies basic shadow styling.<br> ' +
          '***Important:*** the shadow only appears if the width of the section element is at least 1024px.',
      },
    },
  },
} as ComponentMeta<typeof SectionComponent>

const Template: ComponentStory<typeof SectionComponent> = (args) => (
  <SectionComponent {...args} className="p-4" />
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  tone: Tone.primary,
}

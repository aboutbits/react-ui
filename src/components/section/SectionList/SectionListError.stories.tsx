import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListError as SectionListErrorComponent } from './SectionList'
import { Tone } from '../../button/Button'

export default {
  title: 'Components/Section/SectionListError',
  component: SectionListErrorComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds a HTML-div element and applies some padding and text coloring.<br>' +
          'Usually, it used to indicated that something went wrong e.g. there was no conection to the server possible.',
      },
    },
  },
} as ComponentMeta<typeof SectionListErrorComponent>

const Template: ComponentStory<typeof SectionListErrorComponent> = (args) => (
  <SectionListErrorComponent {...args}>Error!</SectionListErrorComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const TonePrimary = Template.bind({})
TonePrimary.args = {
  backgroundColor: Tone.primary,
}

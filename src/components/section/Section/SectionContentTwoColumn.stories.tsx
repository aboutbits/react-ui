import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionContentTwoColumn as SectionContentTwoColumnComponent } from './SectionContentTwoColumn'
import { SectionDescriptionItem } from '../SectionItem/SectionItem'

export default {
  title: 'Components/Section/SectionContentTwoColumn',
  component: SectionContentTwoColumnComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an HTML-div element and applies a grid with two elements per row.<br> ' +
          '***Important:*** the rows appear only if the width of the div element has at least the screen size `xl` from Tailwind.',
      },
    },
  },
} as ComponentMeta<typeof SectionContentTwoColumnComponent>

const Template: ComponentStory<typeof SectionContentTwoColumnComponent> = (
  args
) => (
  <SectionContentTwoColumnComponent {...args}>
    <SectionDescriptionItem content="admin@aboutbits.it" title="E-mail" />
    <SectionDescriptionItem content="John Doe" title="Name" />
  </SectionContentTwoColumnComponent>
)

export const Default = Template.bind({})
Default.args = {}

export const BackgroundColorPrimary = Template.bind({})
BackgroundColorPrimary.args = {
  backgroundColor: 'primary',
}

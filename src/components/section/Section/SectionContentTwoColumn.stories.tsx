import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionContentTwoColumn as SectionContentTwoColumnComponent } from './SectionContentTwoColumn'

export default {
  title: 'Components/Section/SectionContentTwoColumn',
  component: SectionContentTwoColumnComponent,
} as ComponentMeta<typeof SectionContentTwoColumnComponent>

const Template: ComponentStory<typeof SectionContentTwoColumnComponent> = (
  args
) => (
  <SectionContentTwoColumnComponent {...args}>
    I am a Section!
  </SectionContentTwoColumnComponent>
)

export const Default = Template.bind({})
Default.args = {}

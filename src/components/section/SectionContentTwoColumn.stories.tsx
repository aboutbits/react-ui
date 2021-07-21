import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionContentTwoColumn as SectionContentTwoColumnCompoonent } from './Section'

export default {
  title: 'Components/Section/SectionContentTwoColumn',
  component: SectionContentTwoColumnCompoonent,
} as ComponentMeta<typeof SectionContentTwoColumnCompoonent>

const Template: ComponentStory<typeof SectionContentTwoColumnCompoonent> = (
  args
) => (
  <SectionContentTwoColumnCompoonent {...args}>
    I am a Section!
  </SectionContentTwoColumnCompoonent>
)

export const Default = Template.bind({})
Default.args = {}

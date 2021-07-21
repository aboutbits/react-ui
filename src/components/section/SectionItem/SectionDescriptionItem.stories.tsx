import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionDescriptionItem as SectionDescriptionItemComponent } from './SectionItem'

export default {
  title: 'Components/Section/Description Item',
  component: SectionDescriptionItemComponent,
} as ComponentMeta<typeof SectionDescriptionItemComponent>

const Template: ComponentStory<typeof SectionDescriptionItemComponent> = (
  args
) => (
  <SectionDescriptionItemComponent
    {...args}
    title={'I am a Title!'}
    content={'I am Content!'}
    className="bg-gray-700"
  />
)

export const Default = Template.bind({})
Default.args = {}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionDescriptionItem as SectionDescriptionItemComponent } from './SectionItem'

export default {
  title: 'Components/Section',
  component: SectionDescriptionItemComponent,
} as ComponentMeta<typeof SectionDescriptionItemComponent>

const Template: ComponentStory<typeof SectionDescriptionItemComponent> = (
  args
) => <SectionDescriptionItemComponent {...args} />

export const SectionDescriptionItem = Template.bind({})
SectionDescriptionItem.args = {
  title: 'I am a section list item!',
  content: 'I am content!',
  className: 'text-black',
}

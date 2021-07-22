import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionListItemWithButton as SectionListItemWithButtonComponent } from './SectionItem'
import { SectionContentList } from '../Section/SectionContentList'

export default {
  title: 'Components/Section/SectionListItemWithButton',
  component: SectionListItemWithButtonComponent,
  parameters: {
    docs: {
      description: {
        component:
          'This component adds an HTML-button element and applies basic styling.',
      },
    },
  },
} as ComponentMeta<typeof SectionListItemWithButtonComponent>

const Template: ComponentStory<typeof SectionListItemWithButtonComponent> = (
  args
) => {
  const array = [1, 2, 3]
  return (
    <SectionContentList>
      {array.map((elem) => (
        <SectionListItemWithButtonComponent
          {...args}
          key={elem}
          onClick={() => {
            alert(`Button ${elem} was clicked!`)
          }}
        >
          Button {elem}
        </SectionListItemWithButtonComponent>
      ))}
    </SectionContentList>
  )
}
export const Default = Template.bind({})
Default.args = {}

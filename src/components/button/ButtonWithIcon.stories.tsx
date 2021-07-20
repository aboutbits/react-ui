import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Icon from '@aboutbits/react-material-icons/dist/IconDeleteForever'
import IconForButton from '@aboutbits/react-material-icons/dist/Icon4k'

import { ButtonWithIcon as ButtonWithIconComponent } from './ButtonWithIcon'
import { Size } from './Button'

export default {
  title: 'Components/Button/ButtonWithIcon',
  component: ButtonWithIconComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The ***default values*** for variant, size, and tone can be found in the [Button/Base](http://localhost:4000/?path=/docs/components-button-base--default) section. <br>' +
          'The size of the icon is chancing with the property size. Size.md equals `w-4 h4` whereas Size.sm equals `w-3 h3`.',
      },
    },
  },
} as ComponentMeta<typeof ButtonWithIconComponent>

const Template: ComponentStory<typeof ButtonWithIconComponent> = (args) => (
  <ButtonWithIconComponent {...args}>
    I am button with an Icon!
  </ButtonWithIconComponent>
)

export const Default = Template.bind({})
Default.args = {
  Icon,
}

export const IconSize = Template.bind({})
IconSize.args = {
  size: Size.sm,
  Icon,
}

export const DifferentIcon = Template.bind({})
DifferentIcon.args = {
  Icon: IconForButton,
}

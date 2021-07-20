import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  ConfirmationDialog as ConfirmationDialogComponent,
  ConfirmationDialogVariant,
} from './ConfirmationDialog'

export default {
  title: 'Components/Dialog',
  component: ConfirmationDialogComponent,
} as ComponentMeta<typeof ConfirmationDialogComponent>

const Template: ComponentStory<typeof ConfirmationDialogComponent> = (args) => (
  <ConfirmationDialogComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  disableConfirm: false,
  disableDismiss: true,
  dismissButtonText: 'dismiss',
  confirmButtonText: 'confirm',
  body: <>I am the body</>,
  title: 'I am a Confirmation Dialog',
}

export const VariantCritical = Template.bind({})
VariantCritical.args = {
  isOpen: true,
  disableConfirm: false,
  disableDismiss: true,
  dismissButtonText: 'dismiss',
  confirmButtonText: 'confirm',
  body: <>I am the body</>,
  title: 'I am a Confirmation Dialog',
  variant: ConfirmationDialogVariant.critical,
}

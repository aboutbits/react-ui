import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ConfirmationDialog as ConfirmationDialogComponent } from './ConfirmationDialog'

export default {
  title: 'Components/Dialog',
  component: ConfirmationDialogComponent,
} as ComponentMeta<typeof ConfirmationDialogComponent>

const Template: ComponentStory<typeof ConfirmationDialogComponent> = (args) => (
  <ConfirmationDialogComponent {...args} />
)

export const ConfirmationDialog = Template.bind({})
ConfirmationDialog.args = {
  isOpen: true,
  disableConfirm: false,
  disableDismiss: true,
  dismissButtonText: 'dismiss',
  confirmButtonText: 'confirm',
  body: <>I am the body</>,
  title: 'I am a Confirmation Dialog',
}

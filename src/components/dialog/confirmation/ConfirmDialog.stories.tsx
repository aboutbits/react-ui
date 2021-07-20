import React from 'react'
import { ComponentStory, ComponentMeta, forceReRender } from '@storybook/react'
import { ConfirmationDialog as ConfirmationDialogComponent } from './ConfirmationDialog'
import { Button } from '../../../index'

let toggle = false

const toggleFunction = () => {
  toggle = !toggle
  forceReRender()
}

export default {
  title: 'Components/Dialog',
  component: ConfirmationDialogComponent,
} as ComponentMeta<typeof ConfirmationDialogComponent>

const Template: ComponentStory<typeof ConfirmationDialogComponent> = (args) => {
  return (
    <div>
      {toggle ? (
        <ConfirmationDialogComponent {...args} />
      ) : (
        <Button
          onClick={() => {
            toggleFunction()
          }}
        >
          show dialog
        </Button>
      )}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  disableConfirm: false,
  disableDismiss: true,
  dismissButtonText: 'dismiss',
  confirmButtonText: 'confirm',
  body: <>I am the body</>,
  title: 'I am a Confirmation Dialog',

  onDismiss: () => toggleFunction(),
  onConfirm: () => toggleFunction(),
}

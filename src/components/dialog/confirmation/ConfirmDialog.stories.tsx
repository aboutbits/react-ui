import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ConfirmationDialog as ConfirmationDialogComponent } from './ConfirmationDialog'
import { Button } from '../../../index'

export default {
  title: 'Components/Dialog',
  component: ConfirmationDialogComponent,
} as ComponentMeta<typeof ConfirmationDialogComponent>

const Template: ComponentStory<typeof ConfirmationDialogComponent> = (args) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      {toggle ? (
        <ConfirmationDialogComponent
          {...args}
          onDismiss={() => setToggle(!toggle)}
          onConfirm={() => setToggle(!toggle)}
        />
      ) : (
        <Button onClick={() => setToggle(!toggle)}>show dialog</Button>
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
}

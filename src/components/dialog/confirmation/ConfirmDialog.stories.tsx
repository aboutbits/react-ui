import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ConfirmationDialog as ConfirmationDialogComponent } from './ConfirmationDialog'
import { Button } from '../../../index'

export default {
  title: 'Components/ConfirmDialog',
  component: ConfirmationDialogComponent,
  parameters: {
    docs: {
      description: {
        component:
          'There are some requirements if the component is used:<br>' +
          '<ol>\n' +
          '<li>The package of @reach/dialog needs to be installed (`npm i @reach/dialog`)</li>\n' +
          '<li>Add the following css snippet:</li>\n' +
          '</ol>' +
          '<p>:root {<br>' +
          '  --reach-dialog: 1;<br>' +
          '}<br>' +
          '<br>' +
          '[data-reach-dialog-overlay] {<br>' +
          '  background:rgba(0, 0, 0, 0.36);<br>' +
          '  @apply fixed;<br>' +
          '  @apply inset-0;<br>' +
          '  @apply overflow-auto;<br>' +
          '}<br>' +
          '<br>' +
          '[data-reach-dialog-content] {<br>' +
          '  outline: none;<br>' +
          '}</p>',
      },
    },
  },
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

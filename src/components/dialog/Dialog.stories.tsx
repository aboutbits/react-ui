import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { Button } from '../button'
import { DialogContentArea } from './areas/DialogContentArea'
import { DialogFooterActions } from './areas/DialogFooterActions'
import { DialogFooterArea } from './areas/DialogFooterArea'
import { DialogHeaderMain } from './areas/DialogHeaderMain'
import { Dialog } from './Dialog'
import { DialogHeaderClose } from './DialogHeaderCose'

export default {
  title: 'Components/Dialog/New',
  component: Dialog,
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <div>
          <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
          <Story args={{ isOpen, onDismiss: () => setIsOpen(false) }} />
        </div>
      )
    },
  ],
} as ComponentMeta<typeof Dialog>

export const Default: ComponentStory<typeof Dialog> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <Dialog title="Hello" isOpen={isOpen} onDismiss={onDismiss}>
      <>
        <DialogHeaderMain title="Hello" />
        <DialogContentArea>This is a basic dialog.</DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions>
            <Button className="flex-1" onClick={onDismiss}>
              OK
            </Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}

export const WithCloseButton: ComponentStory<typeof Dialog> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <Dialog title="Hello" isOpen={isOpen} onDismiss={onDismiss}>
      <>
        <DialogHeaderClose title="Hello" onDismiss={onDismiss} />
        <DialogContentArea>
          This is a dialog with close button.
        </DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions>
            <Button className="flex-1" onClick={onDismiss}>
              OK
            </Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
WithCloseButton.storyName = 'With close button'

export const WithLongContent: ComponentStory<typeof Dialog> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <Dialog title="Hello" isOpen={isOpen} onDismiss={onDismiss}>
      <>
        <DialogHeaderClose title="Hello" onDismiss={onDismiss} />
        <DialogContentArea className="leading-10">
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
          <br />
          <br />
          This is a dialog with long content.
        </DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions>
            <Button className="flex-1" onClick={onDismiss}>
              OK
            </Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
WithLongContent.storyName = 'With long content'

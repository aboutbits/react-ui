import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { Button } from '../button'
import { DialogContentArea } from './areas/DialogContentArea'
import { DialogFooterActions } from './areas/DialogFooterActions'
import { DialogFooterArea } from './areas/DialogFooterArea'
import { DialogHeaderMain } from './areas/DialogHeaderMain'
import { Dialog, DialogPosition, DialogSize } from './Dialog'
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
        <DialogContentArea>
          This is a default dialog with header and action.
        </DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions>
            <Button onClick={onDismiss}>OK</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}

export const SizeSm: ComponentStory<typeof Dialog> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <Dialog
      title="Hello"
      isOpen={isOpen}
      onDismiss={onDismiss}
      size={DialogSize.sm}
    >
      <>
        <DialogHeaderMain title="Small dialog" />
        <DialogContentArea>This is a small size dialog.</DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions size={DialogSize.sm}>
            <Button onClick={onDismiss}>OK</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
SizeSm.storyName = 'Size Sm'

export const SizeMd: ComponentStory<typeof Dialog> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <Dialog
      title="Hello"
      isOpen={isOpen}
      onDismiss={onDismiss}
      size={DialogSize.md}
    >
      <>
        <DialogHeaderMain title="Medium dialog" />
        <DialogContentArea>This is a medium size dialog.</DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions size={DialogSize.md}>
            <Button onClick={onDismiss}>OK</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
SizeMd.storyName = 'Size Md'

export const SizeLg: ComponentStory<typeof Dialog> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <Dialog
      title="Hello"
      isOpen={isOpen}
      onDismiss={onDismiss}
      size={DialogSize.lg}
    >
      <>
        <DialogHeaderMain title="Large dialog" />
        <DialogContentArea>This is a large size dialog.</DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions size={DialogSize.lg}>
            <Button onClick={onDismiss}>xxx</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
SizeLg.storyName = 'Size Lg'

export const MobileFullscreen: ComponentStory<typeof Dialog> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <Dialog
      title="Mobile fullscreen"
      isOpen={isOpen}
      onDismiss={onDismiss}
      mobilePosition={DialogPosition.fullscreen}
    >
      <>
        <DialogHeaderMain title="Mobile fullscreen" />
        <DialogContentArea>
          This is dialog will be fullscreen on mobile.
        </DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions size={DialogSize.lg}>
            <Button onClick={onDismiss}>OK</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
MobileFullscreen.storyName = 'Mobile fullscreen'

export const CompleteFullscreen: ComponentStory<typeof Dialog> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <Dialog
      title="Complete fullscreen"
      isOpen={isOpen}
      onDismiss={onDismiss}
      mobilePosition={DialogPosition.fullscreen}
      desktopPosition={DialogPosition.fullscreen}
    >
      <>
        <DialogHeaderMain title="Complete fullscreen" />
        <DialogContentArea>
          This dialog will be fullscreen on mobile and desktop.
        </DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions size={DialogSize.lg}>
            <Button onClick={onDismiss}>OK</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
CompleteFullscreen.storyName = 'Complete fullscreen'

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
            <Button onClick={onDismiss}>OK</Button>
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
            <Button onClick={onDismiss}>OK</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
WithLongContent.storyName = 'With long content'

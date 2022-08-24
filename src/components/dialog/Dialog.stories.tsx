import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { ReactNode, useState } from 'react'
import { Button } from '../button'
import { DialogContentArea } from './areas/DialogContentArea'
import { DialogFooterActions } from './areas/DialogFooterActions'
import { DialogFooterArea } from './areas/DialogFooterArea'
import { DialogHeaderMain } from './areas/DialogHeaderMain'
import { Dialog, DialogPosition, DialogProps, DialogSize } from './Dialog'
import { DialogHeaderClose } from './DialogHeaderClose'

export default {
  title: 'Components/Dialog/Dialog',
  component: Dialog,
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
          <Story
            args={{
              ...context.args,
              isOpen,
              onDismiss: () => setIsOpen(false),
            }}
          />
        </>
      )
    },
  ],
  args: {
    title: 'Dialog description',
  },
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This component is used to show an overlay dialog on the page. It supports different sizes and position behaviours on mobile and desktop.',
      },
    },
  },
} as ComponentMeta<typeof Dialog>

const DialogTemplate = ({
  content,
  ...args
}: DialogProps & { content: ReactNode }) => {
  return (
    <Dialog {...args}>
      <>
        <DialogHeaderMain title="Hello" />
        <DialogContentArea>{content}</DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions size={args.size}>
            <Button onClick={args.onDismiss}>OK</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}

export const Default: ComponentStory<typeof DialogTemplate> =
  DialogTemplate.bind({})
Default.args = {
  content: 'This is a default dialog',
}

export const SizeSm: ComponentStory<typeof DialogTemplate> =
  DialogTemplate.bind({})
SizeSm.storyName = 'Size Sm'
SizeSm.args = {
  size: DialogSize.sm,
  content: 'This is a small size dialog',
}

export const SizeMd: ComponentStory<typeof DialogTemplate> =
  DialogTemplate.bind({})
SizeMd.storyName = 'Size Md'
SizeMd.args = {
  size: DialogSize.md,
  content: 'This is a medium size dialog',
}

export const SizeLg: ComponentStory<typeof DialogTemplate> =
  DialogTemplate.bind({})
SizeLg.storyName = 'Size Lg'
SizeLg.args = {
  size: DialogSize.lg,
  content: 'This is a large size dialog',
}

export const MobileFullscreen: ComponentStory<typeof DialogTemplate> =
  DialogTemplate.bind({})
MobileFullscreen.storyName = 'Mobile fullscreen'
MobileFullscreen.args = {
  size: DialogSize.lg,
  content: 'This is dialog will be fullscreen on mobile.',
  mobilePosition: DialogPosition.fullscreen,
}

export const CompleteFullscreen: ComponentStory<typeof DialogTemplate> =
  DialogTemplate.bind({})
CompleteFullscreen.storyName = 'Complete fullscreen'
CompleteFullscreen.args = {
  size: DialogSize.lg,
  content: 'This dialog will be fullscreen on mobile and desktop.',
  mobilePosition: DialogPosition.fullscreen,
  desktopPosition: DialogPosition.fullscreen,
}

export const WithCloseButton: ComponentStory<typeof Dialog> = (
  args: DialogProps
) => {
  return (
    <Dialog {...args}>
      <>
        <DialogHeaderClose title="Hello" onDismiss={args.onDismiss} />
        <DialogContentArea>
          This is a dialog with close button.
        </DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions>
            <Button onClick={args.onDismiss}>OK</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}
WithCloseButton.storyName = 'With close button'

export const WithLongContent: ComponentStory<typeof DialogTemplate> =
  DialogTemplate.bind({})
WithLongContent.storyName = 'With long content'
WithLongContent.args = {
  content: new Array(20).fill(null).map((_, i) => {
    return (
      <div key={i} className="mb-10">
        This is a dialog with long content.
      </div>
    )
  }),
}
WithLongContent.parameters = {
  docs: {
    description: {
      story:
        'With the default theme, the `ContentArea` shows a top border when scrolled.',
    },
  },
}

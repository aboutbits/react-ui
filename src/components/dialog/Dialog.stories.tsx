import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react'
import React, { ReactElement, ReactNode, useState } from 'react'
import { Button } from '../button'
import DialogDocs from './Dialog.docs.mdx'
import { DialogHeaderClose } from './DialogHeaderClose'
import {
  Dialog,
  DialogContentArea,
  DialogFooterActions,
  DialogFooterArea,
  DialogHeader,
  DialogHeaderArea,
  DialogHeaderLeftArea,
  DialogHeaderRightArea,
  DialogHeaderTitle,
  DialogPosition,
  DialogProps,
  DialogSize,
} from './'

type TemplateArgs = DialogProps & { content: ReactNode }
type StoryType = ComponentStory<(args: TemplateArgs) => ReactElement>

const DialogDecorator: DecoratorFn = (Story, context) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        {context.parameters.buttonText || 'Open Dialog'}
      </Button>
      <Story
        args={{
          ...context.args,
          isOpen,
          onDismiss: () => setIsOpen(false),
          content: context.parameters.content,
        }}
      />
    </div>
  )
}

const DialogTemplate = ({ content, ...args }: TemplateArgs) => {
  return (
    <Dialog {...args}>
      <>
        <DialogHeader title="Hello" />
        <DialogContentArea>{content}</DialogContentArea>
        <DialogFooterArea>
          <DialogFooterActions>
            <Button onClick={args.onDismiss}>OK</Button>
          </DialogFooterActions>
        </DialogFooterArea>
      </>
    </Dialog>
  )
}

export default {
  title: 'Components/Dialog/Dialog',
  component: Dialog,
  subcomponents: {
    DialogHeaderArea,
    DialogHeaderLeftArea,
    DialogHeaderRightArea,
    DialogHeaderTitle,
    DialogHeader,
    DialogHeaderClose,
    DialogContentArea,
    DialogFooterArea,
    DialogFooterActions,
  },
  decorators: [DialogDecorator],
  args: {
    title: 'Dialog description',
  },
  parameters: {
    docs: {
      page: DialogDocs,
    },
  },
} as ComponentMeta<typeof Dialog>

export const Default: StoryType = DialogTemplate.bind({})
Object.assign(Default, {
  parameters: {
    content: 'This is a default dialog',
  },
})

export const SizeSm: StoryType = DialogTemplate.bind({})
Object.assign(SizeSm, {
  storyName: 'Size Sm',
  args: {
    size: DialogSize.sm,
  },
  parameters: {
    buttonText: 'Small dialog',
    content: 'This is a small size dialog',
  },
})

export const SizeMd: StoryType = DialogTemplate.bind({})
Object.assign(SizeMd, {
  storyName: 'Size Md',
  args: {
    size: DialogSize.md,
  },
  parameters: {
    buttonText: 'Medium dialog',
    content: 'This is a medium size dialog',
  },
})

export const SizeLg: StoryType = DialogTemplate.bind({})
Object.assign(SizeLg, {
  storyName: 'Size Lg',
  args: {
    size: DialogSize.lg,
  },
  parameters: {
    buttonText: 'Large dialog',
    content: 'This is a large size dialog',
  },
})

export const MobileFullscreen: StoryType = DialogTemplate.bind({})
Object.assign(MobileFullscreen, {
  storyName: 'Mobile fullscreen',
  args: {
    mobilePosition: DialogPosition.fullscreen,
  },
  parameters: {
    buttonText: 'Mobile fullscreen',
    content: 'This is dialog will be fullscreen on mobile.',
  },
})

export const DesktopFullscreen: StoryType = DialogTemplate.bind({})
Object.assign(DesktopFullscreen, {
  storyName: 'Desktop fullscreen',
  args: {
    desktopPosition: DialogPosition.fullscreen,
  },
  parameters: {
    buttonText: 'Desktop fullscreen',
    content: 'This is dialog will be fullscreen on desktop.',
  },
})

export const CompleteFullscreen: StoryType = DialogTemplate.bind({})
Object.assign(CompleteFullscreen, {
  storyName: 'Complete fullscreen',
  args: {
    mobilePosition: DialogPosition.fullscreen,
    desktopPosition: DialogPosition.fullscreen,
  },
  parameters: {
    buttonText: 'Complete fullscreen',
    content: 'This dialog will be fullscreen on mobile and desktop.',
  },
})

export const WithCloseButton: StoryType = (args: DialogProps) => {
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
Object.assign(WithCloseButton, {
  storyName: 'With close button',
})

export const WithLongContent: StoryType = DialogTemplate.bind({})
Object.assign(WithLongContent, {
  storyName: 'With long content',
  parameters: {
    content: new Array(20).fill(null).map((_, i) => {
      return (
        <div key={i} className="mb-10">
          This is a dialog with long content.
        </div>
      )
    }),
  },
})

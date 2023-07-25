import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react'
import { ReactElement, ReactNode, useState } from 'react'
import { Button } from '../../button'
import {
  Dialog,
  DialogContent,
  DialogContentArea,
  DialogFooterActions,
  DialogFooterArea,
  DialogFooterWithActions,
  DialogHeader,
  DialogHeaderArea,
  DialogHeaderCloseAction,
  DialogHeaderLeftActionIcon,
  DialogHeaderRow,
  DialogHeaderGroup,
  DialogHeaderTitle,
  DialogHeaderWithClose,
  DialogPosition,
  DialogProps,
  DialogSize,
} from '../'
import DialogDocs from './Dialog.docs.mdx'

type TemplateArgs = DialogProps & { content: ReactNode }
type StoryType = ComponentStory<(args: TemplateArgs) => ReactElement>

const DialogDecorator: DecoratorFn = (Story, context) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/strict-boolean-expressions
          context.parameters.buttonText || 'Open Dialog'
        }
      </Button>
      <Story
        args={{
          ...context.args,
          isOpen,
          onDismiss: () => {
            setIsOpen(false)
          },
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          content: context.parameters.content,
          overlayClassName: 'z-10',
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
        <DialogContent>{content}</DialogContent>
        <DialogFooterWithActions>
          <Button onClick={args.onDismiss}>OK</Button>
        </DialogFooterWithActions>
      </>
    </Dialog>
  )
}

export default {
  title: 'Components/Dialog/Dialog',
  component: Dialog,
  subcomponents: {
    DialogHeaderArea,
    DialogHeaderRow,
    DialogHeaderGroup,
    DialogHeaderTitle,
    DialogHeader,
    DialogHeaderWithClose,
    DialogHeaderLeftActionIcon,
    DialogHeaderCloseAction,
    DialogContent,
    DialogContentArea,
    DialogFooterArea,
    DialogFooterActions,
    DialogFooterWithActions,
  },
  decorators: [DialogDecorator],
  args: {
    'aria-label': 'Dialog description',
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

export const MobileAndDesktopFullscreen: StoryType = DialogTemplate.bind({})
Object.assign(MobileAndDesktopFullscreen, {
  storyName: 'Mobile and desktop fullscreen',
  args: {
    mobilePosition: DialogPosition.fullscreen,
    desktopPosition: DialogPosition.fullscreen,
  },
  parameters: {
    buttonText: 'Mobile and desktop fullscreen',
    content: 'This dialog will be fullscreen on mobile and desktop.',
  },
})

export const WithClose: StoryType = (args: DialogProps) => {
  return (
    <Dialog {...args}>
      <>
        <DialogHeaderWithClose title="Hello" onDismiss={args.onDismiss} />
        <DialogContent>This is a dialog with close button.</DialogContent>
        <DialogFooterWithActions>
          <Button onClick={args.onDismiss}>OK</Button>
        </DialogFooterWithActions>
      </>
    </Dialog>
  )
}
Object.assign(WithClose, {
  storyName: 'With close',
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

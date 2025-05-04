import { Size } from '../types'
import { DialogFooterActionsPosition } from './DialogFooter/types'
import { DialogHeaderRowLayout } from './DialogHeader/types'
import { DialogPosition } from './types'

export default {
  overlay: {
    base: 'fixed inset-0 flex justify-center items-center bg-black/[0.36]',
    mobilePosition: {
      [DialogPosition.Center]: 'p-6',
      [DialogPosition.Fullscreen]: 'p-0',
    },
    desktopPosition: {
      [DialogPosition.Center]: 'lg:p-8',
      [DialogPosition.Fullscreen]: 'lg:p-0',
    },
  },
  dialog: {
    base: 'flex flex-col min-h-0 outline-hidden bg-white shadow-dialog max-h-full overflow-hidden',
    mobilePositionSize: {
      [DialogPosition.Center]: {
        base: 'rounded-lg',
        [Size.Sm]: 'w-full max-w-xs',
        [Size.Md]: 'w-full max-w-xl',
        [Size.Lg]: 'w-full max-w-3xl',
      },
      [DialogPosition.Fullscreen]: {
        base: 'w-full h-full',
        [Size.Sm]: '',
        [Size.Md]: '',
        [Size.Lg]: '',
      },
    },
    desktopPositionSize: {
      [DialogPosition.Center]: {
        base: 'lg:h-auto lg:rounded-lg',
        [Size.Sm]: 'lg:w-full lg:max-w-xs',
        [Size.Md]: 'lg:w-full lg:max-w-xl',
        [Size.Lg]: 'lg:w-full lg:max-w-3xl',
      },
      [DialogPosition.Fullscreen]: {
        base: 'lg:w-full lg:h-full lg:max-w-none lg:rounded-none',
        [Size.Sm]: '',
        [Size.Md]: '',
        [Size.Lg]: '',
      },
    },
  },
  headerArea: {
    base: 'mb-4 px-6 mt-6 flex flex-col gap-y-2 shrink-0',
  },
  headerRow: {
    base: 'items-center',
    layout: {
      [DialogHeaderRowLayout.Stretch]: '',
      [DialogHeaderRowLayout.SpaceBetween]: 'flex justify-between gap-x-2.5',
      [DialogHeaderRowLayout.Start]: 'flex justify-start gap-x-2.5',
      [DialogHeaderRowLayout.Center]: 'flex justify-center gap-x-2.5',
      [DialogHeaderRowLayout.End]: 'flex justify-end gap-x-2.5',
    },
  },
  headerGroup: {
    base: 'flex items-center gap-y-2',
    spacing: {
      [Size.Sm]: 'gap-x-2.5',
      [Size.Md]: 'gap-x-6',
    },
  },
  headerLeftArea: {
    base: 'flex items-center mr-2 space-x-3 lg:space-x-4',
  },
  headerLeftActionIcon: {
    base: '-ml-2',
  },
  headerRightArea: {
    base: 'flex items-center ml-2 space-x-3 lg:space-x-4',
  },
  headerTitle: {
    base: 'flex-1 text-2xl truncate',
  },
  contentArea: {
    base: 'overflow-auto min-h-0 flex-1 min-h-0 border-t',
    scrolled: {
      off: 'border-transparent',
      on: 'border-neutral-200',
    },
  },
  content: {
    base: 'px-6 pb-6',
  },
  contentMessage: {
    contentContainer: 'flex justify-center items-center',
  },
  listItem: {
    base: 'px-6 flex border-b border-neutral-200 last:border-0 items-center min-h-[3.5rem] bg-white',
  },
  listItemButton: {
    base: 'block w-full focus:outline-neutral-800 justify-between space-x-4 hover:bg-neutral-100 active:bg-neutral-100',
    icon: 'fill-current',
  },
  footerArea: {
    base: 'px-6 py-4 border-t border-neutral-200 bg-neutral-100 text-xs',
  },
  footerActions: {
    base: 'flex flex-col gap-2',
    position: {
      [DialogFooterActionsPosition.Start]: 'justify-start',
      [DialogFooterActionsPosition.Center]: 'justify-center',
      [DialogFooterActionsPosition.End]: 'justify-end',
    },
    dialogSize: {
      [Size.Sm]: '',
      [Size.Md]: 'sm:flex-row',
      [Size.Lg]: 'sm:flex-row',
    },
  },
  loading: {
    listItem: {
      start: {
        base: 'p-4 mr-4 w-full',
      },
      end: {
        base: 'p-4 w-12',
      },
    },
  },
}

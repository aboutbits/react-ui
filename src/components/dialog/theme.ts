export default {
  overlay: {
    base: 'fixed inset-0 flex justify-center items-center bg-black/[0.36]',
    mobilePosition: {
      center: 'p-6',
      fullscreen: 'p-0',
    },
    desktopPosition: {
      center: 'lg:p-8',
      fullscreen: 'lg:p-0',
    },
  },
  dialog: {
    base: 'flex flex-col min-h-0 outline-none bg-white shadow-dialog max-h-full overflow-hidden',
    mobilePositionSize: {
      center: {
        base: 'rounded-lg',
        sm: 'w-full max-w-xs',
        md: 'w-full max-w-xl',
        lg: 'w-full max-w-3xl',
      },
      fullscreen: {
        base: 'w-full h-full',
        sm: '',
        md: '',
        lg: '',
      },
    },
    desktopPositionSize: {
      center: {
        base: 'lg:h-auto lg:rounded-lg',
        sm: 'lg:w-full lg:max-w-xs',
        md: 'lg:w-full lg:max-w-xl',
        lg: 'lg:w-full lg:max-w-3xl',
      },
      fullscreen: {
        base: 'lg:w-full lg:h-full lg:max-w-none lg:rounded-none',
        sm: '',
        md: '',
        lg: '',
      },
    },
  },
  headerArea: {
    base: 'mb-4 px-6 mt-6 flex flex-col gap-y-2 shrink-0',
  },
  headerRow: {
    base: 'items-center',
    layout: {
      stretch: '',
      spaceBetween: 'flex justify-between gap-x-2.5',
      start: 'flex justify-start gap-x-2.5',
      center: 'flex justify-center gap-x-2.5',
      end: 'flex justify-end gap-x-2.5',
    },
  },
  headerGroup: {
    base: 'flex items-center gap-y-2',
    spacing: {
      sm: 'gap-x-2.5',
      md: 'gap-x-6',
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
  },
  footerArea: {
    base: 'px-6 py-4 border-t border-neutral-200 bg-neutral-100 text-xs',
  },
  footerActions: {
    base: 'flex flex-col gap-2',
    position: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
    dialogSize: {
      sm: '',
      md: 'sm:flex-row',
      lg: 'sm:flex-row',
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

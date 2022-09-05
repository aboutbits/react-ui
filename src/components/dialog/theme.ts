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
    base: 'flex flex-col min-h-0 outline-none bg-white shadow-dialog max-h-full',
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
    base: 'mb-4 px-6 mt-6 flex items-center min-h-[2.5rem]',
  },
  headerLeftArea: {
    base: 'flex items-center mr-2 space-x-3 lg:space-x-4',
  },
  headerRightArea: {
    base: 'flex items-center ml-2 space-x-3 lg:space-x-4',
  },
  headerTitle: {
    base: 'flex-1 text-2xl text-neutral-800 truncate',
  },
  contentArea: {
    base: 'pb-4 px-6 overflow-auto min-h-0 flex-1 min-h-0 border-t',
    heightOverflow: {
      off: 'border-transparent',
      on: 'border-neutral-200',
    },
  },
  footerArea: {
    base: 'px-6 pt-4 pb-6 border-t border-neutral-200',
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
}

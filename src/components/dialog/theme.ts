export default {
  confirmation: {
    base: 'absolute top-1/2 left-1/2 p-5 min-w-[17.5rem] max-w-min space-y-4 transform -translate-x-1/2 -translate-y-1/2 outline-none bg-white rounded',
    title: {
      base: 'text-xl',
      variant: {
        confirm: 'text-black',
        critical: 'text-critical-500',
      },
    },
  },
  select: {
    base: 'md:my-20 mx-auto md:w-full md:max-w-3xl bg-white md:rounded-md overflow-hidden',
  },
  header: {
    base: 'px-4 pt-2',
  },
  sectionContainer: {
    base: 'rounded-lg rounded-t-none',
  },

  // ---------------------------------------
  overlay:
    'fixed top-0 left-0 flex justify-center items-center bg-black/[0.36] p-4 min-h-0 h-screen w-screen',
  dialog: {
    base: 'flex flex-col min-h-0 outline-none bg-white rounded-[1.125rem] shadow-dialog max-h-full',
    size: {
      sm: 'w-full max-w-[19.5rem]',
      md: 'w-full max-w-[35rem]',
      lg: 'w-full max-w-[48rem]',
    },
  },
  headerArea: {
    base: 'mb-4 px-6 mt-6 flex items-center min-h-[2.5rem]',
  },
  headerLeftArea: {
    base: 'flex items-center mr-2 lg:mr-3 space-x-3 lg:space-x-4',
  },
  headerRightArea: {
    base: 'flex items-center ml-2 lg:mr-3 space-x-3 lg:space-x-4',
  },
  headerTitle: {
    base: 'flex-1 text-2xl text-neutral-800 truncate',
  },
  contentArea: {
    base: 'pb-4 px-6 overflow-auto min-h-0 flex-1 min-h-0',
  },
  footerArea: {
    base: 'px-6 pt-4 pb-6 border-t border-neutral-200 ',
  },
  footerActions: {
    base: 'flex flex-col gap-2',
    variant: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
    size: {
      sm: '',
      md: 'sm:flex-row',
      lg: 'sm:flex-row',
    },
  },
}

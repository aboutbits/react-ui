export default {
  section: {
    base: '',
  },
  container: {
    // [transform:translateZ(0)] fixes an overflow issue with rounded borders and position sticky in Safari
    base: 'bg-white border border-neutral-400 rounded-lg overflow-hidden [transform:translateZ(0)]',
  },
  content: {
    base: 'px-4 md:px-6 pt-4 md:pt-6 pb-8 md:pb-9',
    layout: {
      ONE_COLUMN_GRID: 'grid gap-y-6',
      TWO_COLUMN_GRID: 'grid xl:grid-cols-2 xl:gap-x-11 gap-y-6',
    },
  },
  contentTitle: { base: 'text-2xl' },
  contentMessage: {
    contentContainer: 'flex justify-center items-center',
  },
  contentList: {
    base: '',
  },
  contentTwoColumn: {
    base: 'grid xl:grid-cols-2 xl:gap-x-11 gap-y-6 px-4 md:px-6 pt-4 md:pt-6 pb-8 md:pb-9',
  },
  listItem: {
    base: 'flex border-b border-neutral-200 last:border-0 items-center min-h-[3.5rem] bg-white px-4 md:px-6',
  },
  listItemWithAction: {
    base: 'justify-between space-x-4',
    action: {
      base: 'flex flex-shrink-0',
    },
  },
  listItemButton: {
    base: 'block w-full focus:outline-neutral-800 justify-between space-x-4 hover:bg-neutral-100 active:bg-neutral-100',
    icon: 'fill-current',
  },
  listItemLink: {
    base: 'block focus:outline-neutral-800 justify-between space-x-4 hover:bg-neutral-100 active:bg-neutral-100',
  },
  subsectionTitle: {
    base: 'bg-neutral-100 px-4 md:px-6 py-1 border-b border-t first:border-t-none border-neutral-200 text-sm text-neutral-600',
  },
  headerArea: {
    base: 'pb-2 flex flex-col gap-y-2',
  },
  headerSpacer: {
    size: {
      SM: '',
      MD: 'h-2',
      LG: 'h-4',
      XL: 'h-6',
    },
  },
  headerTitle: {
    base: 'py-2 flex-1 text-base',
  },
  headerRow: {
    base: '',
    layout: {
      STRETCH: '',
      SPACE_BETWEEN: 'flex justify-between gap-x-2.5',
      START: 'flex justify-start gap-x-2.5',
      CENTER: 'flex justify-center gap-x-2.5',
      END: 'flex justify-end gap-x-2.5',
    },
  },
  headerGroup: {
    base: 'flex items-center gap-y-2',
    spacing: {
      SM: 'gap-x-2.5',
      MD: 'gap-x-6',
    },
  },
  footerArea: {
    base: 'px-4 md:px-6 py-4 bg-neutral-100 border-t border-neutral-200 text-xs',
  },
  loading: {
    listItem: {
      base: '',
      start: {
        base: 'p-4 mr-4 w-full',
      },
      end: {
        base: 'p-4 w-12',
      },
    },
  },
  footerWithSubmit: {
    base: 'flex flex-wrap items-center gap-y-4',
    actions: 'flex-1',
    formSubmitFeedback:
      'w-full justify-center LG:order-first LG:w-auto LG:justify-start',
  },
}

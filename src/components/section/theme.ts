export default {
  section: {
    base: '',
  },
  container: {
    base: 'bg-white border border-neutral-400 rounded-lg overflow-hidden',
  },
  content: {
    base: 'flex flex-col gap-y-6 px-4 md:px-6 pt-4 md:pt-6 pb-8 md:pb-9',
  },
  contentList: {
    base: '',
  },
  contentListEmpty: {
    base: 'justify-center py-4',
  },
  contentListError: {
    base: 'justify-center py-4',
    icon: {
      base: 'fill-current text-white',
    },
    iconContainer: {
      base: 'p-1.5 mr-2 rounded-full bg-critical-500',
    },
    children: {
      base: 'text-critical-500',
    },
  },
  contentTwoColumn: {
    base: 'grid xl:grid-cols-2 xl:gap-x-11 gap-y-6 px-4 md:px-6 pt-4 md:pt-6 pb-8 md:pb-9',
  },
  listItem: {
    base: 'flex items-center min-h-[3.5rem] bg-white px-4 md:px-6',
  },
  listItemWithAction: {
    base: 'justify-between space-x-4',
    action: {
      base: 'flex flex-shrink-0',
    },
  },
  descriptionItem: {
    base: 'flex flex-col text-neutral-800 border-b border-neutral-200',
  },
  descriptionItemTitle: {
    base: 'text-xs',
  },
  listItemButton: {
    button:
      'block w-full border-b border-neutral-200 last:border-0 focus:outline-neutral-800',
    base: 'px-4 md:px-6 justify-between space-x-4 hover:bg-neutral-100',
  },
  listItemLink: {
    link: 'block border-b border-neutral-200 last:border-0 focus:outline-neutral-800',
    base: 'justify-between space-x-4 hover:bg-neutral-100 active:bg-neutral-100',
  },
  subsectionTitle: {
    base: 'bg-neutral-100 px-4 md:px-6 py-1 border-b border-t first:border-t-none border-neutral-200 text-sm text-neutral-600',
  },
  header: {
    base: 'py-2 flex flex-col gap-y-2',
  },
  headerSpacer: {
    size: {
      sm: '',
      md: 'h-2',
      lg: 'h-4',
      xl: 'h-6',
    },
  },
  title: {
    base: 'py-2 flex-1 text-base text-neutral-800',
  },
  headerRow: {
    base: '',
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
  footer: {
    base: 'px-4 md:px-6 py-4 bg-neutral-100 border-t border-neutral-200 text-xs',
  },
}

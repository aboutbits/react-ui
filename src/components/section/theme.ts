export default {
  section: {
    base: '',
  },
  content: {
    base: 'bg-white border border-neutral-400 rounded-lg overflow-hidden',
  },
  contentTitle: {
    base: 'bg-neutral-100 px-6 py-1 border-b border-t border-neutral-200 text-sm text-neutral-600',
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
    base: 'grid xl:grid-cols-2 xl:gap-x-11 gap-y-6 px-6 pt-6 pb-9',
  },
  listItem: {
    base: 'flex items-center min-h-[3.5rem] bg-white text-black',
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
    button: 'block w-full border-b border-neutral-200 last:border-0',
    base: 'px-6 justify-between space-x-4 hover:bg-neutral-100',
  },
  listItemLink: {
    base: 'justify-between space-x-4 hover:bg-neutral-100 active:bg-neutral-100',
  },
  header: {
    base: 'py-2 flex justify-between items-center gap-x-6 gap-y-1 flex-wrap lg:flex-nowrap',
  },
  title: {
    base: 'py-2 flex-1 text-base text-neutral-800',
  },
  search: {
    input: {
      base: 'w-full lg:w-auto',
    },
  },
  actions: {
    base: 'flex items-center gap-x-2.5 gap-y-1',
  },
  action: {
    base: '',
  },
  footer: {
    base: 'px-6 py-4 bg-neutral-100 border-t border-neutral-200 text-xs',
  },
  filter: {
    form: {
      base: 'flex flex-wrap lg:flex-nowrap gap-x-1 lg:gap-x-6 gap-y-1 order-last lg:order-none w-full lg:w-auto',
    },
    trigger: {
      base: 'absolute -right-2 p-1 bg-primary-500 rounded-full',
    },
    container: {
      base: 'px-4 lg:px-5 py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 bg-neutral-100 first:rounded-t-lg',
    },
    dialog: {
      base: 'px-4 lg:px-5 py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 bg-white border-b border-neutral-500',
    },
  },
}

export default {
  section: {
    base: 'lg:shadow-md lg:rounded-md overflow-hidden bg-white',
  },
  content: {
    base: 'pt-5 pb-10 px-4 lg:px-5 bg-white',
  },
  contentList: {
    base: 'space-y-px bg-gray',
    empty: {
      base: 'justify-center py-4',
    },
    error: {
      base: 'justify-center py-4',
      icon: {
        base: 'fill-current text-white',
      },
      iconContainer: {
        base: 'p-1.5 mr-2 rounded-full bg-critical',
      },
      children: {
        base: 'text-critical',
      },
    },
  },
  contentTwoColumn: {
    base: 'grid xl:grid-cols-2 xl:gap-x-5 gap-y-5',
  },
  listItem: {
    base: 'flex items-center min-h-14 px-4 lg:px-5 bg-white text-black',
  },
  listItemWithAction: {
    base: 'justify-between space-x-4',
    action: {
      base: 'flex flex-shrink-0',
    },
  },
  descriptionItem: {
    base: 'flex flex-col pb-2 space-y-1 text-black border-b border-gray',
    title: {
      base: 'text-sm',
    },
  },
  listItemButton: {
    base: 'justify-between space-x-4 hover:bg-primary-50',
  },
  listItemLink: {
    base: 'justify-between space-x-4 hover:bg-primary-50 active:bg-primary-50',
  },
  header: {
    base: 'px-4 lg:px-5 py-5 flex justify-between items-center space-x-2 bg-gray-300 border-b border-gray',
  },
  title: {
    base: 'py-0.5 flex-1 text-sm font-bold uppercase text-black',
  },
  search: {
    input: {
      base: 'flex-1 text-base border-none outline-none p-0 bg-transparent placeholder-gray-600 text-black',
    },
  },
  action: {
    base: 'fill-current text-black hover:bg-gray focus:bg-gray rounded-full hover:ring focus:ring ring-gray disabled:text-gray-400',
    icon: 'h-6',
  },
  footer: {
    base: 'lg:p-4 py-4 px-3 bg-gray-300 border-t border-gray',
  },
  filter: {
    trigger: {
      base: 'absolute -right-2 p-1 bg-primary rounded-full',
    },
    container: {
      base: 'px-4 lg:px-5 py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 bg-gray-300 border-b border-gray',
    },
    dialog: {
      base: 'px-4 lg:px-5 py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 bg-white border-b border-gray',
    },
  },
}

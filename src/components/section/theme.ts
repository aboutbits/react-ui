export default {
  section: {
    base: 'initial:lg:shadow-md initial:lg:rounded-md initial:overflow-hidden initial:bg-white',
  },
  content: {
    base: 'initial:pt-5 initial:pb-10 initial:px-4 initial:lg:px-5 initial:bg-white',
  },
  contentList: {
    base: 'initial:space-y-px initial:bg-gray',
    empty: {
      base: 'initial:justify-center initial:py-4',
    },
    error: {
      base: 'initial:justify-center initial:py-4',
      icon: {
        base: 'initial:fill-current initial:text-white',
      },
      iconContainer: {
        base: 'initial:p-1.5 initial:mr-2 initial:rounded-full initial:bg-critical',
      },
      children: {
        base: 'initial:text-critical',
      },
    },
  },
  contentTwoColumn: {
    base: 'initial:grid initial:xl:grid-cols-2 initial:xl:gap-x-5 initial:gap-y-5',
  },
  listItem: {
    base: 'initial:flex items-center initial:min-h-14 initial:px-4 initial:lg:px-5 initial:bg-white initial:text-black',
  },
  listItemWithAction: {
    base: 'initial:justify-between initial:space-x-4',
    action: {
      base: 'initial:flex initial:flex-shrink-0',
    },
  },
  descriptionItem: {
    base: 'initial:flex initial:flex-col initial:pb-2 initial:space-y-1 initial:text-black initial:border-b initial:border-gray',
    title: {
      base: 'initial:text-sm',
    },
  },
  listItemButton: {
    base: 'initial:justify-between initial:space-x-4 initial:hover:bg-primary-50',
  },
  listItemLink: {
    base: 'initial:justify-between initial:space-x-4 initial:hover:bg-primary-50 initial:active:bg-primary-50',
  },
  header: {
    base: 'initial:px-4 initial:lg:px-5 initial:py-5 initial:flex initial:justify-between initial:items-center initial:space-x-2 initial:bg-gray-300 initial:border-b initial:border-gray',
  },
  title: {
    base: 'initial:py-0.5 initial:flex-1 initial:text-sm initial:font-bold initial:uppercase initial:text-black',
  },
  search: {
    input: {
      base: 'initial:flex-1 initial:text-base initial:border-none initial:outline-none initial:p-0 initial:bg-transparent initial:placeholder-gray-600 initial:text-black',
    },
  },
  action: {
    base: 'initial:fill-current text-black initial:hover:bg-gray initial:focus:bg-gray initial:rounded-full initial:hover:ring initial:focus:ring initial:ring-gray initial:disabled:text-gray-400',
    icon: 'initial:h-6',
  },
  footer: {
    base: 'initial:lg:p-4 initial:py-4 initial:px-3 initial:bg-gray-300 initial:border-t initial:border-gray',
  },
  filter: {
    trigger: {
      base: 'initial:absolute initial:-right-2 initial:p-1 initial:bg-primary initial:rounded-full',
    },
    container: {
      base: 'initial:px-4 initial:lg:px-5 initial:py-5 initial:grid initial:grid-cols-1 initial:md:grid-cols-2 initial:xl:grid-cols-3 initial:gap-4 initial:lg:gap-5 initial:bg-gray-300 initial:border-b initial:border-gray',
    },
    dialog: {
      base: 'initial:px-4 initial:lg:px-5 initial:py-5 initial:grid initial:grid-cols-1 initial:md:grid-cols-2 initial:xl:grid-cols-3 initial:gap-8 initial:bg-white initial:border-b initial:border-gray',
    },
  },
}

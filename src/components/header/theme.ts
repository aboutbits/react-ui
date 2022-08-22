export default {
  buttonIcon: {
    mobile: 'lg:hidden',
    desktop: 'hidden lg:inline-block',
  },
  area: {
    base: 'mb-6 flex min-h-[2.5rem] items-center lg:min-h-[3.75rem]',
  },
  leftArea: {
    base: 'flex items-center mr-2 lg:mr-3 space-x-3 lg:space-x-4',
  },
  rightArea: {
    base: 'flex items-center ml-2 lg:mr-3 space-x-3 lg:space-x-4',
  },
  title: {
    base: 'flex-1 text-3xl font-medium lg:text-4xl truncate',
  },
  search: {
    base: 'flex flex-1 lg:p-0 py-1 px-3 bg-gray-300 lg:bg-transparent rounded-full',
    input: {
      base: 'flex-1 w-full lg:text-3xl outline-none bg-transparent border-none placeholder-gray-500 text-black',
    },
    clearButton: {
      base: 'lg:hidden hover:text-gray-700 focus:text-gray-700',
    },
    icon: { base: 'w-4 h-4 fill-current' },
  },
  leftActionIcon: {
    base: '-ml-2 lg:-ml-4',
  },
  rightActionIcon: {
    base: '',
  },
}

export default {
  largeAction: {
    base: 'hover:text-gray-700 focus:text-gray-700',
    icon: { base: 'w-7 lg:w-9 h-7 lg:h-9 fill-current' },
  },
  smallAction: {
    base: 'hover:text-gray-700 focus:text-gray-700',
    icon: { base: 'w-6 lg:w-8 h-6 lg:h-8 fill-current' },
  },
  editAction: {
    base: 'w-7 lg:w-9 h-7 lg:h-9 fill-current hover:text-gray-700 focus:text-gray-700',
  },
  area: {
    base: 'flex items-center p-4 lg:p-0 bg-white lg:bg-transparent',
  },
  leftArea: {
    base: 'flex items-center mr-4 space-x-3 lg:space-x-4',
  },
  rightArea: {
    base: 'flex items-center ml-4 space-x-3 lg:space-x-4',
  },
  title: {
    base: 'flex-1 text-lg lg:text-3xl font-medium truncate',
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
}

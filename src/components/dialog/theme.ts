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
    base: 'md:my-20 mx-auto md:w-full md:max-w-3xl bg-white md:bg-transparent md:rounded-md overflow-hidden',
  },
  header: {
    base: 'p-0 lg:p-4 bg-gray-300 border-b border-gray-600',
  },
  sectionContent: {
    base: 'bg-white rounded-lg rounded-t-none',
  },
}

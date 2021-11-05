export default {
  confirmation: {
    base: 'absolute top-1/2 left-1/2 p-5 min-w-dialog max-w-min space-y-4 transform -translate-x-1/2 -translate-y-1/2 outline-none',
    normal: 'bg-white rounded',
    title: {
      base: 'text-xl',
      variant: {
        confirm: 'text-black',
        critical: 'text-critical',
      },
    },
  },
  select: {
    base: 'md:my-20 mx-auto md:w-full md:max-w-3xl',
    normal: 'bg-white md:bg-transparent md:rounded-md overflow-hidden',
  },
  header: {
    base: 'p-0 lg:p-4',
    normal: 'bg-gray-300 border-b border-gray-600',
  },
}

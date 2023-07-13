export default {
  container: {
    base: 'flex justify-between',
  },
  prevNext: {
    icon: {
      base: 'inline-block w-5 h-5 fill-current my-0.5',
    },
    text: {
      base: 'hidden LG:block',
    },
  },
  pagesList: { base: 'flex items-center' },
  page: {
    base: 'flex items-center leading-6',
    number: 'px-2',
    enabled: 'hover:underline',
    disabled: 'text-neutral-500 cursor-not-allowed pointer-events-none',
    current: 'font-bold',
  },
}

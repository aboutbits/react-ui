export default {
  container: {
    base: 'p-3',
    tone: {
      positive: 'border border-positive bg-positive-100',
      critical: 'border border-critical bg-critical-100',
    },
  },
  content: {
    base: 'flex items-center space-x-3',
  },
  iconContainer: {
    base: 'flex flex-shrink-0 justify-center items-center w-6 h-6 rounded-full',
    tone: {
      positive: 'bg-positive',
      critical: 'bg-critical',
    },
  },
  icon: {
    base: 'w-4 h-4 fill-current',
    tone: {
      positive: 'text-white',
      critical: 'text-white',
    },
  },
  message: {
    base: 'overflow-hidden text-xs break-words',
    tone: { positive: 'text-black', critical: 'text-black' },
  },
}

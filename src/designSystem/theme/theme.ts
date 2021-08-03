import merge from 'lodash.merge'

export type Theme = typeof defaultTheme
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}
export type OverrideTheme = RecursivePartial<Theme>

const defaultTheme = {
  form: {
    input: {
      base: 'block w-full border p-3 focus:ring-0 appearance-none outline-none',
      normal:
        'border-white focus:border-primary-400 bg-transparent text-white placeholder-gray-100',
      error:
        'border-critical focus:border-critical bg-transparent text-white placeholder-gray-100',
      disabled: 'border-gray text-gray bg-gray-100',
    },
    inputLabel: {
      base: 'block pb-1 font-bold text-xs',
      normal: 'text-white',
      error: 'text-critical',
      disabled: 'text-gray',
    },
    form: {
      base: 'space-y-8 lg:space-y-10',
    },
  },
  loading: {
    bar: {
      base: 'rounded animate-pulse',
      normal: 'bg-gray',
    },
  },
  alert: {
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
  },
  header: {
    largeAction: {
      normal: 'hover:text-gray-700 focus:text-gray-700',
      icon: { base: 'w-8 lg:w-10 h-8 lg:h-10 fill-current' },
    },
    smallAction: {
      normal: 'hover:text-gray-700 focus:text-gray-700',
      icon: { base: 'w-6 lg:w-8 h-6 lg:h-8 fill-current' },
    },
    area: {
      base: 'flex items-center p-4 lg:p-0',
      normal: 'bg-white lg:bg-transparent',
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
    mainWithSearch: {
      base: 'flex flex-1 lg:p-0 py-1 px-3',
      normal: 'bg-gray-300 lg:bg-transparent rounded-full',
      input: {
        base: 'flex-1 w-full lg:text-3xl outline-none',
        normal: 'bg-transparent border-none placeholder-gray text-black',
      },
      button: {
        base: 'lg:hidden',
        normal: 'hover:text-gray-700 focus:text-gray-700',
      },
      icon: { base: 'w-4 h-4 fill-current' },
    },
  },
}

export function makeTheme(overrideTheme?: OverrideTheme): Theme {
  return merge(defaultTheme, overrideTheme)
}

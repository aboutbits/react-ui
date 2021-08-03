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
    listItem: {
      start: {
        base: 'p-4 mr-4 w-full',
      },
      end: {
        base: 'p-4 w-12',
      },
    },
    input: {
      upper: {
        base: 'p-2 w-40',
      },
      lower: {
        base: 'p-6 mt-1 mb-1 w-full',
      },
    },
    descriptionItem: {
      upper: {
        base: 'p-2.5 w-40',
      },
      lower: {
        base: 'p-3 w-full',
      },
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
  dialog: {
    confirmation: {
      base: 'absolute top-1/2 left-1/2 p-5 min-w-dialog max-w-min space-y-4 transform -translate-x-1/2 -translate-y-1/2 outline-none',
      normal: 'bg-white',
      title: {
        base: 'text-xl',
        variant: {
          confirm: 'text-black',
          critical: 'text-critical',
        },
      },
    },
  },
}

export function makeTheme(overrideTheme?: OverrideTheme): Theme {
  return merge(defaultTheme, overrideTheme)
}

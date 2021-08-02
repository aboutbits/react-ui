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
  section: {
    section: {
      base: 'lg:shadow-md',
      normal: 'bg-white',
    },
    content: {
      base: 'pt-5 pb-10 px-4 lg:px-5',
      normal: 'bg-gray-700',
    },
    contentList: {
      base: 'space-y-px',
      normal: 'bg-gray-300',
      empty: {
        base: 'justify-center py-4',
      },
      error: {
        base: 'justify-center py-4',
        icon: {
          base: 'fill-current text-white',
        },
        iconContainer: {
          base: 'p-1.5 mr-2',
          normal: 'rounded-full bg-critical',
        },
        children: {
          normal: 'text-critical',
        },
      },
    },
    contentTwoColumn: {
      base: 'grid xl:grid-cols-2 xl:gap-x-5 gap-y-5',
    },
    listItem: {
      base: 'flex items-center min-h-14 px-4 lg:px-5 text-white',
    },
    listItemWithAction: {
      base: 'justify-between space-x-4',
      action: {
        base: 'flex flex-shrink-0',
      },
    },
    descriptionItem: {
      base: 'flex flex-col pb-2 space-y-1 text-white border-black border-gray-300',
      title: {
        base: 'text-sm',
      },
    },
    listItemWithButton: {
      base: 'justify-between space-x-4 hover:bg-gray-600',
    },
    error: {
      base: 'flex flex-col items-center justify-center overflow-hidden mx-auto my-15 lg:mt-20',
      button: { base: 'mt-10 lg:mt-20' },
      icon: { base: 'w-60 h-60' },
      title: { base: 'mt-7 text-4xl font-bold' },
      children: { base: 'mt-5 w-full text-xl text-center break-words' },
    },
    header: { base: 'px-4 lg:px-5 pt-5 pb-3 bg-white' },
    title: { base: 'text-xs font-bold uppercase text-black' },
    headerWithAction: {
      base: 'flex justify-between items-center space-x-4',
    },
  },
}

export function makeTheme(overrideTheme?: OverrideTheme): Theme {
  return merge(defaultTheme, overrideTheme)
}

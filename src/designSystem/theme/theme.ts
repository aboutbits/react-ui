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
      base: 'lg:shadow-md bg-white',
    },
    sectionContent: {
      base: 'pt-5 pb-10 px-4 lg:px-5 bg-gray-700',
    },
    sectionContentList: {
      base: 'space-y-px bg-gray-300',
      empty: 'justify-center py-4',
      error: {
        base: 'justify-center py-4',
        icon: 'fill-current text-white',
        circle: 'p-1.5 mr-2 rounded-full bg-critical',
        children: 'text-critical',
      },
    },
    sectionContentTwoColumn: {
      base: 'grid xl:grid-cols-2 xl:gap-x-5 gap-y-5',
    },
    sectionListItem: {
      base: 'flex items-center min-h-14 px-4 lg:px-5 text-white',
    },
  },
}

export function makeTheme(overrideTheme?: OverrideTheme): Theme {
  return merge(defaultTheme, overrideTheme)
}

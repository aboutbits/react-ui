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
        base: 'p-6 mt-1 mb-1 w-full border border-transparent',
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
}

export function makeTheme(overrideTheme?: OverrideTheme): Theme {
  return merge(defaultTheme, overrideTheme)
}

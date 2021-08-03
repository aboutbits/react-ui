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
  button: {
    button: {
      base: 'focus:outline-none fill-current',
      size: {
        sm: 'border px-2 py-1',
        md: 'border-2 px-4 py-3 text-lg leading-normal',
      },
      variantTone: {
        solid: {
          base: 'border-transparent font-bold',
          primary:
            'bg-primary hover:bg-primary-700 focus:bg-primary-700 text-white border-transparent font-bold',
          critical:
            'bg-critical hover:bg-critical-700 focus:bg-critical-700 text-white',
          secondary:
            'bg-secondary hover:bg-secondary-700 focus:bg-secondary-700 text-white',
          disabled: 'bg-gray-50 text-gray',
        },
        ghost: {
          base: 'font-bold bg-transparent',
          primary:
            'border-primary hover:border-primary-700 text-primary hover:text-primary-700',
          critical:
            'border-critical hover:border-critical-700 text-critical hover:text-critical-700',
          secondary:
            'border-secondary hover:border-secondary-700 text-secondary hover:text-secondary-700',
          disabled: 'border-gray-500 text-gray',
        },
        transparent: {
          base: 'underline border-transparent background-transparent',
          primary: 'text-primary hover:text-primary-700',
          critical: 'text-critical hover:text-critical-700 underline',
          secondary: 'text-secondary hover:text-secondary-700 ',
          disabled: ' background-gray-50 text-gray',
        },
      },
    },
    buttonLink: {
      base: 'focus:outline-none fill-current',
      size: {
        sm: 'border px-2 py-1',
        md: 'border-2 px-4 py-3 text-lg leading-normal',
      },
    },
    withIcon: {
      iconContainer: {
        base: 'flex justify-center items-center',
      },
    },
  },
}

export function makeTheme(overrideTheme?: OverrideTheme): Theme {
  return merge(defaultTheme, overrideTheme)
}

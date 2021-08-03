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
  action: {
    action: {
      base: 'flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mx-4 lg:mx-0',
      variant: {
        start: 'lg:justify-start',
        center: 'lg:justify-center',
        end: 'lg:justify-end',
      },
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
          base: 'fill-current',
          normal: 'text-withe',
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
      base: 'flex items-center min-h-14 px-4 lg:px-5',
      normal: 'bg-gray-700 text-white',
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
      base: 'justify-between space-x-4',
      normal: 'hover:bg-gray-600',
    },
    error: {
      base: 'flex flex-col items-center justify-center overflow-hidden mx-auto my-15 lg:mt-20',
      button: { base: 'mt-10 lg:mt-20' },
      icon: { base: 'w-60 h-60' },
      title: { base: 'mt-7 text-4xl font-bold' },
      children: { base: 'mt-5 w-full text-xl text-center break-words' },
    },
    header: { base: 'px-4 lg:px-5 pt-5 pb-3 bg-white', normal: 'bg-white' },
    title: { base: 'text-xs font-bold uppercase', normal: 'text-black' },
    headerWithAction: {
      base: 'flex justify-between items-center space-x-4',
    },
  },
  content: {
    area: {
      base: 'space-y-8 lg:space-y-10',
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

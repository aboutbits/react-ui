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
    select: {
      base: 'md:my-20 mx-auto md:w-full md:max-w-3xl',
      normal: 'bg-white md:bg-transparent',
      header: {
        base: 'p-4',
        normal: 'bg-white border-b border-gray-600',
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
  pagination: {
    container: {
      base: 'flex justify-between lg:p-4 py-4 px-3',
    },
    prevNext: {
      icon: {
        base: 'inline-block w-6 h-6 fill-current',
      },
      text: {
        base: 'hidden lg:block',
      },
    },
    pagesList: { base: 'flex items-center' },
    page: {
      base: 'flex items-center',
      normal: 'px-2',
      enabled: 'hover:underline',
      disabled: 'text-gray-500 cursor-not-allowed pointer-events-none',
      current: 'font-bold',
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
    editAction: {
      base: 'w-6 lg:w-8 h-6 lg:h-8 fill-current',
      normal: 'hover:text-gray-700 focus:text-gray-700',
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
    search: {
      base: 'flex flex-1 lg:p-0 py-1 px-3',
      normal: 'bg-gray-300 lg:bg-transparent rounded-full',
      input: {
        base: 'flex-1 w-full lg:text-3xl outline-none',
        normal: 'bg-transparent border-none placeholder-gray text-black',
      },
      clearButton: {
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
            'bg-primary hover:bg-primary-700 focus:bg-primary-700 text-white',
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
    withIcon: {
      iconContainer: {
        base: 'flex justify-center items-center',
      },
      icon: {
        base: 'fill-current',
        size: {
          sm: 'mr-1 w-4 h-4',
          md: 'mr-2 w-6 h-6',
        },
      },
    },
  },
  textLink: {
    base: 'underline hover:text-gray active:text-gray',
  },
  navigation: {
    navigation: {
      base: 'flex flex-col flex-1',
    },
    item: {
      base: 'flex flex-row items-center w-full py-3 lg:py-4 px-4 lg:px-5 outline-none',
      normal: 'text-gray-700 hover:bg-gray-100 focus:bg-primary-50',
      disabled: 'text-gray',
      active: 'text-white from-primary bg-gradient-to-r to-primary-700',
      icon: { base: 'mr-4 w-6 h-6 fill-current' },
      content: { base: 'flex-1 text-left' },
    },
    mobile: {
      dialog: {
        base: 'flex flex-row items-stretch min-h-screen relative mr-14 w-full max-w-sm',
        normal: 'bg-gradient-to-b from-primary-100 to-white',
        closeButton: {
          base: 'absolute right-0 p-4',
          normal: 'hover:opacity-60 active:opacity-60',
          icon: { base: 'fill-current' },
        },
      },
    },
  },
  menu: {
    menuButton: {
      base: 'flex items-center text-xs hover:opacity-60 active:opacity-60',
      text: {
        base: 'underline capitalize',
        normal: 'text-primary-700 lg:text-white',
      },
      icon: {
        base: 'w-6 h-6',
        normal: 'fill-current text-primary-700 lg:text-white',
      },
    },
    menuLink: {
      base: 'block py-1 px-4 hover:bg-primary-100 cursor-pointer',
    },
    menuList: {
      base: 'py-3 mb-1 w-32 text-sm bg-white shadow-languageSelector focus:outline-none',
      normal: 'bg-white',
    },
  },
}

export function makeTheme(overrideTheme?: OverrideTheme): Theme {
  return merge(defaultTheme, overrideTheme)
}

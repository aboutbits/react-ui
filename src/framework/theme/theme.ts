export type Theme = typeof defaultTheme
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}
export type OverrideTheme = RecursivePartial<Theme> & {
  button?: {
    button?: {
      variantTone?: {
        solid?: Partial<typeof defaultTheme.button.button.variantTone.solid> &
          Record<string, string>
        ghost?: Partial<typeof defaultTheme.button.button.variantTone.ghost> &
          Record<string, string>
        transparent?: Partial<
          typeof defaultTheme.button.button.variantTone.transparent
        > &
          Record<string, string>
      }
    }
  }
}

export const defaultTheme = {
  form: {
    input: {
      base: 'block w-full border p-3 focus:ring-0 appearance-none outline-none rounded-md',
      normal:
        'border-gray-700 focus:border-primary-400 bg-transparent text-black placeholder-gray-700',
      error:
        'border-critical focus:border-critical bg-transparent text-black placeholder-gray-700',
      disabled: 'border-gray-700 text-gray-700 bg-gray-100',
    },
    inputError: {
      base: 'block text-xs text-critical',
    },
    inputLabel: {
      base: 'block pb-1 font-bold text-xs',
      normal: 'text-black',
      error: 'text-critical',
      disabled: 'text-gray-700',
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
      normal: 'bg-white rounded',
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
      normal: 'bg-white md:bg-transparent md:rounded-md overflow-hidden',
      header: {
        base: 'p-0 lg:p-4',
        normal: 'bg-gray-300 border-b border-gray-600',
      },
    },
  },
  action: {
    action: {
      base: 'flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mx-0',
      variant: {
        start: 'lg:justify-start',
        center: 'lg:justify-center',
        end: 'lg:justify-end',
      },
    },
  },
  section: {
    section: {
      base: '-mx-4 lg:mx-0 lg:shadow-md lg:rounded-md overflow-hidden',
      normal: 'bg-white',
    },
    content: {
      base: 'pt-5 pb-10 px-4 lg:px-5',
      normal: 'bg-white',
    },
    contentList: {
      base: 'space-y-px',
      normal: 'bg-gray',
      empty: {
        base: 'justify-center py-4',
      },
      error: {
        base: 'justify-center py-4',
        icon: {
          base: 'fill-current',
          normal: 'text-white',
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
      normal: 'bg-white text-black',
    },
    listItemWithAction: {
      base: 'justify-between space-x-4',
      action: {
        base: 'flex flex-shrink-0',
      },
    },
    descriptionItem: {
      base: 'flex flex-col pb-2 space-y-1 text-black border-b border-gray',
      title: {
        base: 'text-sm',
      },
    },
    listItemButton: {
      base: 'justify-between space-x-4',
      normal: 'hover:bg-primary-50',
    },
    listItemLink: {
      base: 'justify-between space-x-4',
      normal: 'hover:bg-primary-50 active:bg-primary-50',
    },
    header: {
      base: 'px-4 lg:px-5 pt-5 pb-3',
      normal: 'bg-gray-300 border-b border-gray',
    },
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
    error: {
      base: 'flex flex-col items-center justify-center overflow-hidden mx-auto my-16 lg:mt-20',
      button: { base: 'mt-10 lg:mt-20' },
      icon: { base: 'w-60 h-60' },
      title: { base: 'mt-7 text-4xl font-bold' },
      children: { base: 'mt-5 w-full text-xl text-center break-words' },
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
        sm: 'border px-2 py-1 rounded',
        md: 'border-2 px-4 py-3 text-lg leading-normal rounded-md',
      },
      variantTone: {
        solid: {
          base: 'border-transparent font-bold',
          primary:
            'bg-primary hover:bg-primary-700 focus:bg-primary-700 text-white',
          critical:
            'bg-critical hover:bg-critical-700 focus:bg-critical-700 text-white',
          secondary:
            'bg-secondary hover:bg-secondary-100 focus:bg-secondary-100 text-white',
          disabled: 'bg-gray-50 text-gray',
        },
        ghost: {
          base: 'font-bold bg-transparent',
          primary:
            'border-primary hover:border-primary-700 text-primary hover:text-primary-700',
          critical:
            'border-critical hover:border-critical-700 text-critical hover:text-critical-700',
          secondary:
            'border-secondary hover:border-secondary-100 text-secondary hover:text-secondary-100',
          disabled: 'border-gray-500 text-gray',
        },
        transparent: {
          base: 'underline border-transparent background-transparent',
          primary: 'text-primary hover:text-primary-700',
          critical: 'text-critical hover:text-critical-700 underline',
          secondary: 'text-secondary hover:text-secondary-100',
          disabled: 'background-gray-50 text-gray',
        },
      },
    },
    buttonLink: {
      base: 'text-center',
    },
    withIcon: {
      iconContainer: {
        base: 'flex justify-center items-center',
      },
      icon: {
        base: 'fill-current',
        size: {
          sm: 'mr-2 w-4 h-4',
          md: 'mr-3 w-6 h-6',
        },
      },
    },
  },
  textLink: {
    base: 'underline focus:no-underline focus:outline-none focus:ring',
  },
  navigation: {
    navigation: {
      base: 'flex flex-col flex-1 space-y-1',
    },
    item: {
      base: 'flex flex-row items-center w-full py-2 lg:py-3 px-4 lg:px-5 outline-none',
      normal:
        'text-gray-800 hover:text-black hover:bg-gray-100 focus:text-black focus:bg-gray-100 focus:ring',
      disabled: 'text-gray',
      active: 'text-primary bg-primary-50',
      icon: { base: 'mr-4 w-6 h-6 fill-current' },
      content: { base: 'flex-1 text-left' },
    },
    mobile: {
      dialog: {
        base: 'flex flex-row items-stretch min-h-screen relative mr-14 w-full max-w-sm',
        normal: 'bg-white',
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
      base: 'flex items-center underline focus:no-underline focus:outline-none focus:ring',
      icon: {
        base: 'w-6 h-6 fill-current',
      },
    },
    menuItem: {
      base: 'block py-1 px-4 cursor-pointer',
      normal: 'hover:bg-primary-100',
    },
    menuList: {
      base: 'py-2 mb-1 w-32 shadow focus:outline-none',
      normal: 'bg-white',
    },
  },
}

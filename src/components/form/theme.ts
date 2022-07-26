export default {
  form: {
    base: 'space-y-8 lg:space-y-10',
  },
  formError: {
    base: 'col-span-2',
  },
  input: {
    base: 'block w-full bg-transparent leading-5 appearance-none outline-none focus:ring-0 focus:outline focus:outline-1 focus:-outline-offset-2',
    field: 'relative',
    modeVariant: {
      light: {
        base: {
          normal: 'text-neutral-800 placeholder:text-neutral-500',
          error: 'text-neutral-800 placeholder:text-neutral-500',
          disabled: 'text-neutral-400 placeholder:text-neutral-400',
        },
        ghost: {
          base: 'rounded-lg p-2.5-1px border',
          normal:
            'border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800',
          error:
            'border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: 'border-neutral-400',
        },
        soft: {
          base: 'rounded-lg p-2.5-1px border',
          normal:
            'bg-neutral-100 border-neutral-100 focus:border-neutral-800 focus:outline-neutral-800',
          error:
            'border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: '',
        },
        transparent: {
          base: 'rounded-lg p-2.5-1px border',
          normal:
            'border-transparent focus:border-neutral-800 focus:outline-neutral-800 hover:bg-neutral-100 hover:border-neutral-100',
          error:
            'border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: '',
        },
        underline: {
          base: 'py-1 px-0 border-0 border-b relative',
          normal:
            'border-transparent hover:border-neutral-800 focus:border-neutral-800',
          error:
            'border-critical-500 hover:border-critical-500 focus:border-critical-500',
          disabled: 'border-transparent',
        },
      },
      dark: {
        base: {
          normal: 'text-white placeholder:text-neutral-500',
          error: 'text-white placeholder:text-neutral-500',
          disabled: 'text-neutral-400 placeholder:text-neutral-400',
        },
        ghost: {
          base: 'rounded-lg p-2.5-1px border',
          normal: 'border-neutral-200 focus:border-white focus:outline-white ',
          error:
            'border-critical-300 focus:border-critical-300 focus:outline-critical-300 ',
          disabled: 'border-neutral-400 ',
        },
        soft: {
          base: 'rounded-lg p-2.5-1px border',
          normal:
            'bg-neutral-800 border-neutral-800 focus:border-white focus:outline-white',
          error:
            'border-critical-300 focus:border-critical-300 focus:outline-critical-300',
          disabled: '',
        },
        transparent: {
          base: 'rounded-lg p-2.5-1px border',
          normal: 'border-transparent focus:border-white focus:outline-white',
          error:
            'border-critical-300 focus:border-critical-300 focus:outline-critical-300',
          disabled: '',
        },
        underline: {
          base: 'py-1 px-0 border-0 border-b relative',
          normal: 'border-transparent hover:border-white focus:border-white',
          error:
            'border-critical-300 hover:border-critical-300 focus:border-critical-300',
          disabled: 'border-transparent',
        },
      },
    },
    withIconStart: 'pl-11',
    withIconEnd: 'pr-11',
  },
  inputLabel: {
    base: 'block pb-1 text-xs font-medium',
    modeVariant: {
      light: {
        base: {
          normal: 'text-neutral-800',
          error: 'text-critical-500',
          disabled: 'text-neutral-400',
        },
        ghost: {
          base: 'ml-1',
        },
        soft: {
          base: 'ml-1',
        },
        transparent: {
          base: 'ml-1',
        },
      },
      dark: {
        base: {
          normal: 'text-white',
          error: 'text-critical-300',
          disabled: 'text-neutral-400',
        },
        ghost: {
          base: 'ml-1',
        },
        soft: {
          base: 'ml-1',
        },
        transparent: {
          base: 'ml-1',
        },
      },
    },
  },
  inputError: {
    base: 'mt-1 block text-xs font-medium',
    modeVariant: {
      light: {
        base: {
          base: 'text-critical-500',
        },
        ghost: {
          base: 'ml-1',
        },
        soft: {
          base: 'ml-1',
        },
        transparent: {
          base: 'ml-1',
        },
      },
      dark: {
        base: {
          base: 'text-critical-300',
        },
        ghost: {
          base: 'ml-1',
        },
        soft: {
          base: 'ml-1',
        },
        transparent: {
          base: 'ml-1',
        },
      },
    },
  },
  inputIcon: {
    base: 'w-5 h-5 fill-current',
    light: {
      normal: 'text-neutral-800',
      disabled: 'text-neutral-400',
    },
    dark: {
      normal: 'text-white',
      disabled: 'text-neutral-400',
    },
    container: {
      base: 'absolute top-0 bottom-0 flex items-center pointer-events-none',
      start: 'left-0 pl-3.5',
      end: 'right-0 pr-3.5',
    },
  },
  select: {
    base: 'text-ellipsis overflow-hidden',
    variant: {
      ghost: 'pr-9',
      soft: 'pr-9',
      transparent: 'pr-9',
      underline: 'pr-7 bg-right',
    },
  },
  option: {
    base: 'bg-transparent',
    light: {
      normal: 'text-neutral-800',
    },
    dark: {
      normal: 'text-neutral-800',
    },
  },
}

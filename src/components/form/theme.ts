export default {
  form: {
    base: 'space-y-8 lg:space-y-10',
  },
  formError: {
    base: 'xl:col-span-full',
  },
  input: {
    base: 'block w-full p-2.5-1px border leading-5 appearance-none outline-none focus:ring-0 focus:outline focus:outline-1 focus:-outline-offset-2 rounded-lg',
    field: 'relative',
    modeVariant: {
      light: {
        base: {
          normal: 'text-neutral-800 placeholder:text-neutral-500',
          error: 'text-neutral-800 placeholder:text-neutral-500',
          disabled: 'text-neutral-400 placeholder:text-neutral-400',
        },
        ghost: {
          normal:
            'bg-transparent border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800',
          error:
            'bg-transparent border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: 'bg-transparent border-neutral-400',
        },
        soft: {
          normal:
            'bg-neutral-100 border-neutral-100 focus:border-neutral-800 focus:outline-neutral-800',
          error:
            'bg-neutral-100 border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: 'bg-neutral-100 border-neutral-100',
        },
        solid: {
          normal:
            'bg-white border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800',
          error:
            'bg-white border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: 'bg-white border-neutral-400',
        },
        transparent: {
          normal:
            'bg-transparent border-transparent focus:border-neutral-800 focus:outline-neutral-800 hover:bg-neutral-100 hover:border-neutral-100',
          error:
            'bg-transparent border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: 'bg-transparent border-transparent',
        },
      },
      dark: {
        base: {
          normal: 'text-white placeholder:text-neutral-500',
          error: 'text-white placeholder:text-neutral-500',
          disabled: 'text-neutral-400 placeholder:text-neutral-400',
        },
        ghost: {
          normal:
            'bg-transparent border-neutral-200 focus:border-white focus:outline-white ',
          error:
            'bg-transparent border-critical-300 focus:border-critical-300 focus:outline-critical-300 ',
          disabled: 'bg-transparent border-neutral-400',
        },
        soft: {
          normal:
            'bg-neutral-800 border-neutral-800 focus:border-white focus:outline-white',
          error:
            'bg-neutral-800 border-critical-300 focus:border-critical-300 focus:outline-critical-300',
          disabled: 'bg-neutral-800 border-neutral-800',
        },
        solid: {
          normal:
            'bg-black border-neutral-200 focus:border-white focus:outline-white ',
          error:
            'bg-black border-critical-300 focus:border-critical-300 focus:outline-critical-300 ',
          disabled: 'bg-black border-neutral-400',
        },
        transparent: {
          normal:
            'bg-transparent border-transparent focus:border-white focus:outline-white',
          error:
            'bg-transparent border-critical-300 focus:border-critical-300 focus:outline-critical-300',
          disabled: 'bg-transparent border-transparent',
        },
      },
    },
    withIconStart: 'pl-11',
    withIconEnd: 'pr-11',
  },
  inputLabel: {
    base: 'block pb-1 ml-1 text-xs font-medium',
    light: {
      normal: 'text-neutral-800',
      error: 'text-critical-500',
      disabled: 'text-neutral-400',
    },
    dark: {
      normal: 'text-white',
      error: 'text-critical-300',
      disabled: 'text-neutral-400',
    },
  },
  inputError: {
    base: 'mt-1 ml-1 block text-xs font-medium',
    light: {
      normal: 'text-critical-500',
    },
    dark: {
      normal: 'text-critical-300',
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
    base: 'pr-9 text-ellipsis overflow-hidden',
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
  toggleSwitch: {
    base: 'relative inline-flex items-center gap-x-2',
    normal: 'cursor-pointer',
    disabled: '',
    input: {
      base: 'peer absolute h-0 w-0 opacity-0',
    },
    label: {
      base: '',
    },
    switch: {
      base: 'block shrink-0 rounded-full border-2 p-0.5 outline-1 outline-offset-2 peer-focus:outline',
      normal: 'transition-colors duration-200 ease-in-out',
      disabled: '',
      modeState: {
        light: {
          normal: {
            base: 'outline-neutral-800',
            checked: 'border-primary-500 bg-primary-500',
            unchecked: 'border-neutral-600',
          },
          disabled: {
            base: '',
            checked: 'border-neutral-200 bg-neutral-200',
            unchecked: 'border-neutral-400',
          },
        },
        dark: {
          normal: {
            base: 'outline-white',
            checked: 'border-primary-300 bg-primary-300',
            unchecked: 'border-white',
          },
          disabled: {
            base: '',
            checked: 'border-neutral-600 bg-neutral-600',
            unchecked: 'border-neutral-400',
          },
        },
      },
      size: {
        sm: {
          base: 'w-10',
        },
        md: {
          base: 'w-12',
        },
        lg: {
          base: 'w-16',
        },
      },
    },
    handle: {
      base: 'block h-5 w-5 rounded-full',
      normal: 'transition duration-200 ease-in-out',
      disabled: '',
      modeState: {
        light: {
          normal: {
            checked: 'bg-white',
            unchecked: 'bg-neutral-600',
          },
          disabled: {
            checked: 'bg-white',
            unchecked: 'bg-neutral-400',
          },
        },
        dark: {
          normal: {
            checked: 'bg-neutral-800',
            unchecked: 'bg-white',
          },
          disabled: {
            checked: 'bg-neutral-400',
            unchecked: 'bg-neutral-400',
          },
        },
      },
      size: {
        sm: {
          base: 'h-4 w-4',
          checked: 'translate-x-4',
          unchecked: 'translate-x-0',
        },
        md: {
          base: 'h-5 w-5',
          checked: 'translate-x-5',
          unchecked: 'translate-x-0',
        },
        lg: {
          base: 'h-7 w-7',
          checked: 'translate-x-7',
          unchecked: 'translate-x-0',
        },
      },
    },
  },
  selectItem: {
    input: {
      container: {
        base: 'flex flex-row text-left gap-x-2 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-2',
        normal: 'focus-within:outline-neutral-800',
        error: 'focus-within:outline-critical-500',
      },
      selectButton: {
        base: 'flex-1 text-left -my-2.5 -ml-2 pl-2.5 focus:ring-0 focus:outline-none',
      },
      placeholder: {
        base: 'flex-1',
      },
      iconContainer: {
        base: 'mr-1',
        normal: 'focus:outline-neutral-800',
        error: 'focus:outline-critical-500',
      },
      icon: {
        base: 'h-5 w-5',
      },
    },
    dialogContentArea: {
      base: 'border-t border-neutral-200',
    },
  },
}

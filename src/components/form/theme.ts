export default {
  formError: {
    base: 'xl:col-span-full',
  },
  input: {
    base: 'block w-full p-2.5-1px border leading-5 appearance-none outline-none focus:ring-0 focus:outline focus:outline-1 focus:-outline-offset-2 rounded-lg',
    field: 'relative',
    modeVariant: {
      light: {
        base: {
          normal: 'placeholder:text-neutral-800/[0.36]',
          error: 'placeholder:text-neutral-800/[0.36]',
          disabled:
            'text-neutral-800/[0.36] placeholder:text-neutral-800/[0.36]',
        },
        ghost: {
          normal:
            'bg-transparent border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800',
          error:
            'bg-transparent border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: 'bg-transparent border-neutral-800/[0.36]',
        },
        soft: {
          normal:
            'bg-neutral-800/[0.06] border-transparent focus:border-neutral-800 focus:outline-neutral-800',
          error:
            'bg-neutral-800/[0.06] border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: 'bg-neutral-800/[0.16] border-transparent',
        },
        solid: {
          normal:
            'bg-white border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800',
          error:
            'bg-white border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          disabled: 'bg-white border-neutral-800/[0.36]',
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
          normal: 'text-white placeholder:text-white/[0.48]',
          error: 'text-white placeholder:text-white/[0.48]',
          disabled: 'text-white/[0.36] placeholder:text-white/[0.36]',
        },
        ghost: {
          normal:
            'bg-transparent border-neutral-200 focus:border-white focus:outline-white ',
          error:
            'bg-transparent border-critical-300 focus:border-critical-300 focus:outline-critical-300 ',
          disabled: 'bg-transparent border-white/[0.36]',
        },
        soft: {
          normal:
            'bg-white/[0.08] border-transparent focus:border-white focus:outline-white',
          error:
            'bg-white/[0.08] border-critical-300 focus:border-critical-300 focus:outline-critical-300',
          disabled: 'bg-white/[0.16] border-transparent',
        },
        solid: {
          normal:
            'bg-neutral-800 border-neutral-200 focus:border-white focus:outline-white ',
          error:
            'bg-neutral-800 border-critical-300 focus:border-critical-300 focus:outline-critical-300 ',
          disabled: 'bg-neutral-800 border-white/[0.36]',
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
      normal: '',
      error: 'text-critical-500',
      disabled: 'text-neutral-800/[0.36]',
    },
    dark: {
      normal: 'text-white',
      error: 'text-critical-300',
      disabled: 'text-white/[0.36]',
    },
  },
  inputError: {
    base: 'mt-1 ml-1 block text-xs font-medium',
    light: {
      normal: 'text-critical-500',
      disabled: 'text-neutral-800/[0.36]',
    },
    dark: {
      normal: 'text-critical-300',
      disabled: 'text-white/[0.36]',
    },
  },
  inputIcon: {
    base: 'w-5 h-5 fill-current',
    light: {
      normal: '',
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
      normal: '',
    },
    dark: {
      normal: '',
    },
  },
  toggleSwitch: {
    base: 'relative inline-flex items-start gap-x-2',
    normal: 'cursor-pointer',
    disabled: '',
    layout: {
      start: 'flex-row-reverse',
      end: '',
      spaceBetween: 'w-full justify-between',
    },
    inputHeight: {
      base: 'min-h-[2.5rem]',
      size: {
        sm: 'pt-2',
        md: 'pt-1.5',
        lg: 'pt-0.5',
      },
    },
    input: {
      base: 'peer absolute h-0 w-0 opacity-0',
    },
    label: {
      base: '',
      size: {
        sm: '',
        md: 'pt-0.5',
        lg: 'pt-1.5',
      },
    },
    switch: {
      base: 'block shrink-0 rounded-full border-2 p-0.5 outline-1 outline-offset-2 peer-focus:outline',
      normal: 'transition-colors duration-200 ease-in-out',
      disabled: '',
      modeState: {
        light: {
          normal: {
            base: 'outline-neutral-800',
            checked: 'border-transparent bg-primary-500',
            unchecked: 'border-neutral-600',
          },
          disabled: {
            base: '',
            checked: 'border-transparent bg-neutral-800/[0.36]',
            unchecked: 'border-neutral-800/[0.36]',
          },
        },
        dark: {
          normal: {
            base: 'outline-white',
            checked: 'border-transparent bg-primary-300',
            unchecked: 'border-white',
          },
          disabled: {
            base: '',
            checked: 'border-transparent bg-white/[0.26]',
            unchecked: 'border-white/[0.36]',
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
            unchecked: 'bg-neutral-800/[0.36]',
          },
        },
        dark: {
          normal: {
            checked: 'bg-neutral-800',
            unchecked: 'bg-white',
          },
          disabled: {
            checked: 'bg-white/[0.36]',
            unchecked: 'bg-white/[0.36]',
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
  checkbox: {
    base: 'relative inline-flex items-start gap-x-2',
    normal: 'cursor-pointer',
    disabled: '',
    layout: {
      start: 'flex-row-reverse',
      end: '',
      spaceBetween: 'w-full justify-between',
    },
    inputHeight: {
      base: 'min-h-[2.5rem]',
      size: {
        sm: 'pt-2',
        md: 'pt-1.5',
        lg: 'pt-0.5',
      },
    },
    input: {
      base: 'peer absolute h-0 w-0 opacity-0',
    },
    label: {
      base: '',
      size: {
        sm: '',
        md: 'pt-0.5',
        lg: 'pt-1.5',
      },
    },
    check: {
      base: 'block shrink-0 outline-1 rounded-md outline-offset-[-1px] peer-focus:outline',
      normal: '',
      disabled: '',
      modeState: {
        light: {
          normal: {
            base: 'outline-neutral-800',
            checked: 'fill-primary-500',
            unchecked: 'fill-neutral-800',
          },
          disabled: {
            base: 'fill-neutral-800/[0.36]',
            checked: '',
            unchecked: '',
          },
        },
        dark: {
          normal: {
            base: 'outline-white',
            checked: 'fill-primary-300',
            unchecked: 'fill-white',
          },
          disabled: {
            base: '',
            checked: 'fill-white/[0.36]',
            unchecked: 'fill-white/[0.36]',
          },
        },
      },
      size: {
        sm: {
          base: 'h-6 w-6',
        },
        md: {
          base: 'h-7 w-7',
        },
        lg: {
          base: 'h-9 w-9',
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
  fieldSet: {
    container: {
      indent: {
        labelAndChildren: 'ml-1',
      },
    },
    label: {
      indent: {
        label: 'ml-1',
      },
    },
  },
}

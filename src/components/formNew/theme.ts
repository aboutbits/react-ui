export default {
  input: {
    base: 'block w-full p-2.5-1px border leading-5 appearance-none outline-none focus:ring-0 focus:outline focus:outline-1 focus:-outline-offset-2 rounded-lg',
    field: 'relative',
    modeVariant: {
      light: {
        base: {
          tone: {
            NEUTRAL: 'placeholder:text-neutral-800/[0.36]',
            CRITICAL: 'placeholder:text-neutral-800/[0.36]',
          },
          disabled:
            'text-neutral-800/[0.36] placeholder:text-neutral-800/[0.36]',
        },
        ghost: {
          tone: {
            NEUTRAL:
              'bg-transparent border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800',
            CRITICAL:
              'bg-transparent border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          },
          disabled: 'bg-transparent border-neutral-800/[0.36]',
        },
        soft: {
          tone: {
            NEUTRAL:
              'bg-neutral-800/[0.06] border-transparent focus:border-neutral-800 focus:outline-neutral-800',
            CRITICAL:
              'bg-neutral-800/[0.06] border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          },
          disabled: 'bg-neutral-800/[0.16] border-transparent',
        },
        solid: {
          tone: {
            NEUTRAL:
              'bg-white border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800',
            CRITICAL:
              'bg-white border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          },
          disabled: 'bg-white border-neutral-800/[0.36]',
        },
        transparent: {
          tone: {
            NEUTRAL:
              'bg-transparent border-transparent focus:border-neutral-800 focus:outline-neutral-800 hover:bg-neutral-100 hover:border-neutral-100',
            CRITICAL:
              'bg-transparent border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          },
          disabled: 'bg-transparent border-transparent',
        },
      },
      dark: {
        base: {
          tone: {
            NEUTRAL: 'text-white placeholder:text-white/[0.48]',
            CRITICAL: 'text-white placeholder:text-white/[0.48]',
          },
          disabled: 'text-white/[0.36] placeholder:text-white/[0.36]',
        },
        ghost: {
          tone: {
            NEUTRAL:
              'bg-transparent border-neutral-200 focus:border-white focus:outline-white ',
            CRITICAL:
              'bg-transparent border-critical-300 focus:border-critical-300 focus:outline-critical-300 ',
          },
          disabled: 'bg-transparent border-white/[0.36]',
        },
        soft: {
          tone: {
            NEUTRAL:
              'bg-white/[0.08] border-transparent focus:border-white focus:outline-white',
            CRITICAL:
              'bg-white/[0.08] border-critical-300 focus:border-critical-300 focus:outline-critical-300',
          },
          disabled: 'bg-white/[0.16] border-transparent',
        },
        solid: {
          tone: {
            NEUTRAL:
              'bg-neutral-800 border-neutral-200 focus:border-white focus:outline-white ',
            CRITICAL:
              'bg-neutral-800 border-critical-300 focus:border-critical-300 focus:outline-critical-300 ',
          },
          disabled: 'bg-neutral-800 border-white/[0.36]',
        },
        transparent: {
          tone: {
            NEUTRAL:
              'bg-transparent border-transparent focus:border-white focus:outline-white',
            CRITICAL:
              'bg-transparent border-critical-300 focus:border-critical-300 focus:outline-critical-300',
          },
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
      tone: {
        NEUTRAL: '',
        CRITICAL: 'text-critical-500',
      },
      disabled: 'text-neutral-800/[0.36]',
    },
    dark: {
      tone: {
        NEUTRAL: 'text-white',
        CRITICAL: 'text-critical-300',
      },
      disabled: 'text-white/[0.36]',
    },
  },
  inputMessage: {
    base: 'mt-1 block text-xs font-medium',
    indent: 'ml-1',
    light: {
      tone: {
        NEUTRAL: '',
        CRITICAL: 'text-critical-500',
      },
      disabled: 'text-neutral-800/[0.36]',
    },
    dark: {
      tone: {
        NEUTRAL: 'text-white',
        CRITICAL: 'text-critical-300',
      },
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
  checkbox: {
    base: 'relative inline-flex items-start gap-x-2',
    normal: 'cursor-pointer',
    disabled: '',
    layout: {
      START: 'flex-row-reverse',
      END: '',
      SPACE_BETWEEN: 'w-full justify-between',
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
      mode: {
        light: {
          normal: '',
          disabled: 'text-neutral-800/[0.36]',
        },
        dark: {
          normal: 'text-white',
          disabled: 'text-white/[0.36]',
        },
      },
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
      mode: {
        light: 'outline-neutral-800',
        dark: 'outline-white',
      },
      size: {
        sm: 'h-6 w-6',
        md: 'h-7 w-7',
        lg: 'h-9 w-9',
      },
      checked: {
        base: '[[type=checkbox]:not(:checked)~&]:hidden',
        modeState: {
          light: {
            normal: 'fill-primary-500',
            disabled: 'fill-neutral-800/[0.36]',
          },
          dark: {
            normal: 'fill-primary-300',
            disabled: 'fill-white/[0.36]',
          },
        },
      },
      unchecked: {
        base: '[[type=checkbox]:checked~&]:hidden',
        modeState: {
          light: {
            normal: 'fill-neutral-800',
            disabled: 'fill-neutral-800/[0.36]',
          },
          dark: {
            normal: 'fill-white',
            disabled: 'fill-white/[0.36]',
          },
        },
      },
    },
  },
  fieldset: {
    container: {
      indent: {
        none: '',
        label: '',
        labelAndChildren: 'ml-1',
      },
    },
    legend: {
      indent: {
        none: '',
        label: 'ml-1',
        labelAndChildren: '',
      },
    },
  },
  toggleSwitch: {
    base: 'relative inline-flex items-start gap-x-2',
    normal: 'cursor-pointer',
    disabled: '',
    layout: {
      START: 'flex-row-reverse',
      END: '',
      SPACE_BETWEEN: 'w-full justify-between',
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
      mode: {
        light: {
          normal: '',
          disabled: 'text-neutral-800/[0.36]',
        },
        dark: {
          normal: 'text-white',
          disabled: 'text-white/[0.36]',
        },
      },
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
          normal:
            'outline-neutral-800 border-neutral-600 [[type=checkbox]:checked~&]:border-transparent [[type=checkbox]:checked~&]:bg-primary-500',
          disabled:
            'border-neutral-800/[0.36] [[type=checkbox]:checked~&]:border-transparent [[type=checkbox]:checked~&]:bg-neutral-800/[0.36]',
        },
        dark: {
          normal:
            'outline-white border-white [[type=checkbox]:checked~&]:border-transparent [[type=checkbox]:checked~&]:bg-primary-300',
          disabled:
            'border-white/[0.36] [[type=checkbox]:checked~&]:border-transparent [[type=checkbox]:checked~&]:bg-white/[0.26]',
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
          normal: 'bg-neutral-600 [[type=checkbox]:checked+span>&]:bg-white',
          disabled:
            'bg-neutral-800/[0.36] [[type=checkbox]:checked+span>&]:bg-white',
        },
        dark: {
          normal: 'bg-white [[type=checkbox]:checked+span>&]:bg-neutral-800',
          disabled: 'bg-white/[0.36]',
        },
      },
      size: {
        sm: 'h-4 w-4 translate-x-0 [[type=checkbox]:checked+span>&]:translate-x-4',
        md: 'h-5 w-5 translate-x-0 [[type=checkbox]:checked+span>&]:translate-x-5',
        lg: 'h-7 w-7 translate-x-0 [[type=checkbox]:checked+span>&]:translate-x-7',
      },
    },
  },
}

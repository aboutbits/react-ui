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
    base: 'mt-1 ml-1 block text-xs font-medium',
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
}

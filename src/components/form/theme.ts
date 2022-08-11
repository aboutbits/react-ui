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
}

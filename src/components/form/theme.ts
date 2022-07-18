export default {
  form: {
    base: 'space-y-8 lg:space-y-10',
  },
  formError: {
    base: 'col-span-2',
  },
  input: {
    base: 'block w-full p-2.5-1px bg-transparent border leading-5 appearance-none outline-none focus:ring-0 focus:outline focus:outline-1 focus:-outline-offset-2 rounded-lg',
    field: 'relative',
    light: {
      normal:
        'border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800 text-neutral-800 placeholder:text-neutral-500',
      error:
        'border-critical-500 focus:border-critical-500 focus:outline-critical-500 text-neutral-800 placeholder:text-neutral-500',
      disabled:
        'border-neutral-400 text-neutral-400 placeholder:text-neutral-400',
    },
    dark: {
      normal:
        'border-neutral-200 focus:border-white focus:outline-white text-white placeholder:text-neutral-500',
      error:
        'border-critical-300 focus:border-critical-300 focus:outline-critical-300 text-white placeholder:text-neutral-500',
      disabled:
        'border-neutral-400 text-neutral-400 placeholder:text-neutral-400',
    },
    withIconStart: 'pl-12',
    withIconEnd: 'pr-12',
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
      base: 'absolute top-0 bottom-0 flex items-center ',
      start: 'left-0 pl-3',
      end: 'right-0 pr-3',
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

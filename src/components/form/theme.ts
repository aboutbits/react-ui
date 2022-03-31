export default {
  form: {
    base: 'space-y-8 lg:space-y-10',
  },
  formError: {
    base: 'col-span-2',
  },
  input: {
    base: 'block w-full border p-3 focus:ring-0 appearance-none outline-none rounded-md',
    light: {
      normal:
        'border-gray-700 focus:border-primary-400 bg-transparent text-black placeholder-gray-700',
      error:
        'border-critical-500 focus:border-critical-500 bg-transparent text-black placeholder-gray-700',
      disabled: 'border-gray-700 text-gray-700 bg-gray-100',
    },
    dark: {
      normal:
        'border-white focus:border-primary-400 bg-transparent text-white placeholder-white',
      error:
        'border-critical-500 focus:border-critical-500 bg-transparent text-white placeholder-white',
      disabled: 'border-gray-700 text-gray-700 bg-gray-100',
    },
  },
  inputLabel: {
    base: 'block pb-1 font-bold text-xs',
    light: {
      normal: 'text-black',
      error: 'text-critical-500',
      disabled: 'text-gray-700',
    },
    dark: {
      normal: 'text-white',
      error: 'text-critical-500',
      disabled: 'text-gray-700',
    },
  },
  inputError: {
    base: 'mt-1 block text-xs',
    light: {
      normal: 'text-critical-500',
    },
    dark: {
      normal: 'text-critical-500',
    },
  },
  option: {
    base: 'bg-transparent',
    light: {
      normal: 'text-black',
    },
    dark: {
      normal: 'text-black',
    },
  },
}

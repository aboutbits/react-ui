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
        'border-critical focus:border-critical bg-transparent text-black placeholder-gray-700',
      disabled: 'border-gray-700 text-gray-700 bg-gray-100',
    },
    dark: {
      normal:
        'border-white focus:border-primary-400 bg-transparent text-white placeholder-white',
      error:
        'border-critical focus:border-critical bg-transparent text-white placeholder-white',
      disabled: 'border-gray-700 text-gray-700 bg-gray-100',
    },
  },
  inputLabel: {
    base: 'block pb-1 font-bold text-xs',
    light: {
      normal: 'text-black',
      error: 'text-critical',
      disabled: 'text-gray-700',
    },
    dark: {
      normal: 'text-white',
      error: 'text-critical',
      disabled: 'text-gray-700',
    },
  },
  inputError: {
    base: 'block text-xs text-critical',
  },
  option: {
    base: 'bg-transparent text-black',
  },
}

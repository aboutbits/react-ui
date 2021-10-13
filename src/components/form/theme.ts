export default {
  formError: {
    base: 'col-span-2',
  },
  input: {
    base: 'block w-full border p-3 focus:ring-0 appearance-none outline-none rounded-md',
    light: {
      normal: '',
      error: '',
      disabled: '',
    },
    dark: {
      normal: '',
      error: '',
      disabled: '',
    },
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
}

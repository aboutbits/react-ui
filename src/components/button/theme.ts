export default {
  button: {
    base: 'focus:outline-none fill-current',
    size: {
      sm: 'border px-2 py-1 rounded',
      md: 'border-2 px-4 py-3 text-lg leading-normal rounded-md',
    },
    variantTone: {
      solid: {
        base: 'border-transparent font-bold',
        primary:
          'bg-primary-500 hover:bg-primary-700 focus:bg-primary-700 text-white',
        critical:
          'bg-critical-500 hover:bg-critical-700 focus:bg-critical-700 text-white',
        secondary:
          'bg-secondary-500 hover:bg-secondary-100 focus:bg-secondary-100 text-white',
        disabled: 'bg-gray-50 text-gray-500',
      },
      ghost: {
        base: 'font-bold bg-transparent',
        primary:
          'border-primary-500 hover:border-primary-700 text-primary-500 hover:text-primary-700',
        critical:
          'border-critical-500 hover:border-critical-700 text-critical-500 hover:text-critical-700',
        secondary:
          'border-secondary-500 hover:border-secondary-100 text-secondary-500 hover:text-secondary-100',
        disabled: 'border-gray-500 text-gray-500',
      },
      transparent: {
        base: 'underline border-transparent background-transparent',
        primary: 'text-primary-500 hover:text-primary-700',
        critical: 'text-critical-500 hover:text-critical-700 underline',
        secondary: 'text-secondary-500 hover:text-secondary-100',
        disabled: 'background-gray-50 text-gray-500',
      },
    },
  },
  buttonLink: {
    base: 'text-center',
  },
  withIcon: {
    iconContainer: {
      base: 'flex justify-center items-center',
    },
    icon: {
      base: 'fill-current',
      size: {
        sm: 'mr-2 w-4 h-4',
        md: 'mr-3 w-6 h-6',
      },
    },
  },
}

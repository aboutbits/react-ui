export default {
  button: {
    base: 'inline-flex items-center justify-center font-medium rounded-lg outline-1 outline-offset-2 focus:outline',
    variantSize: {
      base: {
        sm: 'px-4 py-1.5 text-sm leading-5',
        md: 'px-6 py-2.5 text-sm leading-5',
        lg: 'px-8 py-4 text-lg leading-7',
      },
      ghost: {
        sm: 'px-4-1px py-1.5-1px border',
        md: 'px-6-1px py-2.5-1px border',
        lg: 'px-8-1px py-4-1px border',
      },
    },
    icon: {
      base: 'fill-current',
      size: {
        sm: 'w-4 h-4',
        md: 'w-4 h-4',
        lg: 'w-7 h-7',
      },
      iconStart: {
        size: {
          sm: '-ml-1 mr-1',
          md: '-ml-2 mr-2',
          lg: '-ml-3 mr-3',
        },
      },
      iconEnd: {
        size: {
          sm: 'ml-1 -mr-1',
          md: 'ml-2 -mr-2',
          lg: 'ml-3 -mr-3',
        },
      },
    },
  },
  buttonIcon: {
    base: 'inline-block rounded-full outline-1 outline-offset-2 focus:outline',
    icon: {
      base: 'fill-current',
      size: {
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-9 h-9',
      },
    },
    variantSize: {
      base: {
        sm: 'p-1.5',
        md: 'p-2',
        lg: 'p-3',
      },
      ghost: {
        sm: 'p-1.5-1px border',
        md: 'p-2-1px border',
        lg: 'p-3-1px border',
      },
    },
  },
  variantTone: {
    solid: {
      primary:
        'bg-primary-500 hover:bg-primary-600 text-white outline-primary-500',
      neutral:
        'bg-neutral-700 hover:bg-neutral-900 text-white outline-neutral-800',
      critical:
        'bg-critical-500 hover:bg-critical-600 text-white outline-critical-500',
      warning:
        'bg-warning-500 hover:bg-warning-600 text-white outline-warning-500',
      success:
        'bg-success-500 hover:bg-success-600 text-white outline-success-500',
      informative:
        'bg-informative-500 hover:bg-informative-600 text-white outline-informative-500',
      disabled: 'bg-neutral-200 text-neutral-400',
    },
    ghost: {
      primary:
        'hover:bg-primary-50 focus:bg-primary-50 border-primary-500 focus:border-transparent text-primary-500 outline-primary-500',
      neutral:
        'hover:bg-neutral-100 focus:bg-neutral-100 border-neutral-700 focus:border-transparent text-neutral-700 outline-neutral-700',
      critical:
        'hover:bg-critical-50 focus:bg-critical-50 border-critical-500 focus:border-transparent text-critical-500 outline-critical-500',
      warning:
        'hover:bg-warning-50 focus:bg-warning-50 border-warning-500 focus:border-transparent text-warning-500 outline-warning-500',
      success:
        'hover:bg-success-50 focus:bg-success-50 border-success-500 focus:border-transparent text-success-500 outline-success-500',
      informative:
        'hover:bg-informative-50 focus:bg-informative-50 border-informative-500 focus:border-transparent text-informative-500 outline-informative-500',
      disabled: 'border-neutral-200 text-neutral-400',
    },
    transparent: {
      primary:
        'hover:bg-primary-50t text-primary-500 focus:outline-primary-500',
      neutral:
        'hover:bg-neutral-50t text-neutral-700 focus:outline-neutral-700',
      critical:
        'hover:bg-critical-50t text-critical-500 focus:outline-critical-500',
      warning:
        'hover:bg-warning-50t text-warning-500 focus:outline-warning-500',
      success:
        'hover:bg-success-50t text-success-500 focus:outline-success-500',
      informative:
        'hover:bg-informative-50t text-informative-500 focus:outline-informative-500',
      disabled: 'text-neutral-400',
    },
  },
}

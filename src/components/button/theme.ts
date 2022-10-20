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
      base: 'fill-current inline-block align-top',
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
  modeVariantTone: {
    light: {
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
          'bg-success-600 hover:bg-success-700 text-white outline-success-600',
        informative:
          'bg-informative-500 hover:bg-informative-600 text-white outline-informative-500',
        disabled: 'bg-neutral-800/[0.16] text-neutral-800/[0.36]',
      },
      ghost: {
        primary:
          'hover:bg-primary-500/10 focus:bg-primary-500/10 border-primary-500 focus:border-transparent text-primary-500 outline-primary-500',
        neutral:
          'hover:bg-neutral-500/10 focus:bg-neutral-500/10 border-neutral-700 focus:border-transparent text-neutral-700 outline-neutral-700',
        critical:
          'hover:bg-critical-500/10 focus:bg-critical-500/10 border-critical-500 focus:border-transparent text-critical-500 outline-critical-500',
        warning:
          'hover:bg-warning-500/10 focus:bg-warning-500/10 border-warning-600 focus:border-transparent text-warning-600 outline-warning-600',
        success:
          'hover:bg-success-500/10 focus:bg-success-500/10 border-success-600 focus:border-transparent text-success-600 outline-success-600',
        informative:
          'hover:bg-informative-500/10 focus:bg-informative-500/10 border-informative-500 focus:border-transparent text-informative-500 outline-informative-500',
        disabled: 'border-neutral-800/[0.36] text-neutral-800/[0.36]',
      },
      transparent: {
        primary:
          'hover:bg-primary-500/10 text-primary-500 focus:outline-primary-500',
        neutral:
          'hover:bg-neutral-500/10 text-neutral-700 focus:outline-neutral-700',
        critical:
          'hover:bg-critical-500/10 text-critical-500 focus:outline-critical-500',
        warning:
          'hover:bg-warning-500/10 text-warning-600 focus:outline-warning-600',
        success:
          'hover:bg-success-500/10 text-success-600 focus:outline-success-600',
        informative:
          'hover:bg-informative-500/10 text-informative-500 focus:outline-informative-500',
        disabled: 'text-neutral-800/[0.36]',
      },
    },
    dark: {
      solid: {
        primary:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        neutral:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        critical:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        warning:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        success:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        informative:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        disabled: 'bg-white/[0.26] text-white/[0.36]',
      },
      ghost: {
        primary:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        neutral:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        critical:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        warning:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        success:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        informative:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        disabled: 'border-white/[0.36] text-white/[0.36]',
      },
      transparent: {
        primary: 'hover:bg-white/10 text-white focus:outline-white',
        neutral: 'hover:bg-white/10 text-white focus:outline-white',
        critical: 'hover:bg-white/10 text-white focus:outline-white',
        warning: 'hover:bg-white/10 text-white focus:outline-white',
        success: 'hover:bg-white/10 text-white focus:outline-white',
        informative: 'hover:bg-white/10 text-white focus:outline-white',
        disabled: 'text-white/[0.36]',
      },
    },
  },
}

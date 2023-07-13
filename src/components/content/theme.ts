export default {
  area: {
    base: 'space-y-9',
  },
  message: {
    base: 'flex max-w-sm flex-col items-center justify-center',
    contentContainer: 'flex justify-center items-center',
    icon: {
      base: 'fill-current',
      tone: {
        PRIMARY: 'text-primary-500',
        NEUTRAL: 'text-neutral-500',
        WARNING: 'text-warning-500',
        CRITICAL: 'text-critical-500',
        SUCCESS: 'text-success-500',
        INFORMATIVE: 'text-informative-500',
      },
      style: {
        ROUNDED: 'h-6 w-6',
        PLAIN: 'h-14 w-14',
      },
    },
    iconContainer: {
      base: 'mb-4 last:mb-0',
      style: {
        ROUNDED: {
          base: 'rounded-full p-4',
          tone: {
            PRIMARY: 'bg-primary-100',
            NEUTRAL: 'bg-neutral-100',
            WARNING: 'bg-warning-100',
            CRITICAL: 'bg-critical-100',
            SUCCESS: 'bg-success-100',
            INFORMATIVE: 'bg-informative-100',
          },
        },
        PLAIN: {
          base: '',
          tone: {
            PRIMARY: '',
            NEUTRAL: '',
            WARNING: '',
            CRITICAL: '',
            SUCCESS: '',
            INFORMATIVE: '',
          },
        },
      },
    },
    title: {
      base: 'text-center text-xl font-bold leading-6 mb-1 last:mb-0',
      tone: {
        PRIMARY: 'text-primary-500',
        NEUTRAL: 'text-neutral-500',
        WARNING: 'text-warning-500',
        CRITICAL: 'text-critical-500',
        SUCCESS: 'text-success-500',
        INFORMATIVE: 'text-informative-500',
      },
    },
    text: {
      base: 'text-center tracking-[0.00625rem]',
      tone: {
        PRIMARY: 'text-neutral-500',
        NEUTRAL: 'text-neutral-500',
        WARNING: 'text-neutral-500',
        CRITICAL: 'text-neutral-500',
        SUCCESS: 'text-neutral-500',
        INFORMATIVE: 'text-neutral-500',
      },
    },
  },
  descriptionItem: {
    base: 'flex flex-col border-b border-neutral-200',
  },
  descriptionItemTitle: {
    base: 'text-xs',
  },
  descriptionItemContent: {
    base: 'flex-1 flex',
    alignVertical: {
      START: 'items-start',
      CENTER: 'items-center',
      END: 'items-end',
    },
  },
  loadingDescriptionItem: {
    base: '',
    upper: {
      base: 'p-1.5 w-40',
    },
    lower: {
      base: 'p-2.5 pb-2.5-1px w-full mt-1 mb-1',
    },
  },
}

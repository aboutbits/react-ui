export default {
  area: {
    base: 'space-y-9',
  },
  message: {
    base: 'flex max-w-sm flex-col items-center justify-center',
    contentContainer: 'flex justify-center items-center',
    icon: {
      base: 'h-6 w-6 fill-current',
      tone: {
        primary: 'text-primary-500',
        neutral: 'text-neutral-500',
        warning: 'text-warning-500',
        critical: 'text-critical-500',
        success: 'text-success-500',
        informative: 'text-informative-500',
      },
    },
    iconContainer: {
      base: 'rounded-full bg-neutral-100 p-4 outline-1 outline-offset-2 mb-4 last:mb-0',
      tone: {
        primary: 'bg-primary-100',
        neutral: 'bg-neutral-100',
        warning: 'bg-warning-100',
        critical: 'bg-critical-100',
        success: 'bg-success-100',
        informative: 'bg-informative-100',
      },
    },
    title: {
      base: 'text-center text-xl font-bold leading-6 mb-1 last:mb-0',
      tone: {
        primary: 'text-primary-500',
        neutral: 'text-neutral-500',
        warning: 'text-warning-500',
        critical: 'text-critical-500',
        success: 'text-success-500',
        informative: 'text-informative-500',
      },
    },
    text: {
      base: 'text-center tracking-[0.00625rem]',
      tone: {
        primary: 'text-neutral-500',
        neutral: 'text-neutral-500',
        warning: 'text-neutral-500',
        critical: 'text-neutral-500',
        success: 'text-neutral-500',
        informative: 'text-neutral-500',
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
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
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

export default {
  area: {
    base: 'space-y-9',
  },
  error: {
    base: 'flex flex-col items-center justify-center overflow-hidden mx-auto my-16 lg:mt-20',
    button: { base: 'mt-10 lg:mt-20' },
    icon: { base: 'w-60 h-60' },
    title: { base: 'mt-7 text-4xl font-bold' },
    children: { base: 'mt-5 w-full text-xl text-center break-words' },
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
      base: 'rounded-full bg-neutral-100 p-4 outline-1 outline-offset-2  mt-3 mb-4',
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
      base: 'text-xl font-bold',
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
      base: 'text-center',
      tone: {
        primary: '',
        neutral: 'text-neutral-500',
        warning: '',
        critical: 'text-critical-500',
        success: '',
        informative: '',
      },
    },
  },
}

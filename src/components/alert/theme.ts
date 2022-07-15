export default {
  container: {
    base: 'flex items-start p-4 rounded-lg',
    tone: {
      primary: 'bg-primary-50 text-primary-600',
      neutral: 'bg-neutral-50 text-neutral-600',
      warning: 'bg-warning-50 text-warning-600',
      critical: 'bg-critical-50 text-critical-600',
      success: 'bg-success-50 text-success-600',
      informative: 'bg-informative-50 text-informative-600',
    },
  },
  icon: {
    base: 'w-5 h-5 shrink-0 mr-2 fill-current',
  },
  content: {
    base: 'grow flex justify-between items-start gap-y-4 gap-x-6',
    actionsPosition: {
      responsive: 'flex-wrap',
      fixedRight: '',
      fixedBottom: 'flex-col',
    },
  },
  texts: {
    base: 'overflow-hidden text-sm break-words space-y-2',
  },
  title: {
    base: 'font-medium',
  },
  message: {
    base: '',
  },
  actions: {
    base: 'ml-auto flex -my-1.5 -mr-1.5 -ml-4',
  },
}

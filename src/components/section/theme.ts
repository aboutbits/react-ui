export default {
  section: {
    base: '',
  },
  container: {
    base: 'bg-white border border-neutral-400 rounded-lg overflow-hidden',
  },
  content: {
    base: 'px-4 md:px-6 pt-4 md:pt-6 pb-8 md:pb-9',
    layout: {
      oneColumnGrid: 'grid xl:gap-x-11 gap-y-6',
      twoColumnGrid: 'grid xl:grid-cols-2 xl:gap-x-11 gap-y-6',
    },
  },
  contentTitle: { base: 'text-2xl' },
  contentMessage: {
    container: {
      base: 'flex max-w-sm flex-col items-center justify-center',
      wrapper: 'flex justify-center items-center',
    },
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
  contentList: {
    base: '',
  },
  contentTwoColumn: {
    base: 'grid xl:grid-cols-2 xl:gap-x-11 gap-y-6 px-4 md:px-6 pt-4 md:pt-6 pb-8 md:pb-9',
  },
  listItem: {
    base: 'flex items-center min-h-[3.5rem] bg-white px-4 md:px-6',
  },
  listItemWithAction: {
    base: 'justify-between space-x-4',
    action: {
      base: 'flex flex-shrink-0',
    },
  },
  descriptionItem: {
    base: 'flex flex-col text-neutral-800 border-b border-neutral-200',
  },
  descriptionItemTitle: {
    base: 'text-xs',
  },
  listItemButton: {
    button:
      'block w-full border-b border-neutral-200 last:border-0 focus:outline-neutral-800',
    base: 'px-4 md:px-6 justify-between space-x-4 hover:bg-neutral-100',
  },
  listItemLink: {
    link: 'block border-b border-neutral-200 last:border-0 focus:outline-neutral-800',
    base: 'justify-between space-x-4 hover:bg-neutral-100 active:bg-neutral-100',
  },
  subsectionTitle: {
    base: 'bg-neutral-100 px-4 md:px-6 py-1 border-b border-t first:border-t-none border-neutral-200 text-sm text-neutral-600',
  },
  header: {
    base: 'pb-2 flex flex-col gap-y-2',
  },
  headerSpacer: {
    size: {
      sm: '',
      md: 'h-2',
      lg: 'h-4',
      xl: 'h-6',
    },
  },
  title: {
    base: 'pb-2 flex-1 text-base text-neutral-800',
  },
  headerRow: {
    base: '',
    layout: {
      stretch: '',
      spaceBetween: 'flex justify-between gap-x-2.5',
      start: 'flex justify-start gap-x-2.5',
      center: 'flex justify-center gap-x-2.5',
      end: 'flex justify-end gap-x-2.5',
    },
  },
  headerGroup: {
    base: 'flex items-center gap-y-2',
    spacing: {
      sm: 'gap-x-2.5',
      md: 'gap-x-6',
    },
  },
  footer: {
    base: 'px-4 md:px-6 py-4 bg-neutral-100 border-t border-neutral-200 text-xs',
  },
}

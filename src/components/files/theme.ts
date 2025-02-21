export default {
  container: 'flex flex-col gap-4',
  fileDropzone: {
    container: {
      base: 'flex flex-col items-stretch gap-4',
    },
    uploadButton: {
      base: 'flex items-center gap-4 rounded-xl border border-dashed border-neutral-400 px-6 py-4 hover:bg-primary-50',
      fileHovering: 'bg-primary-50',
    },
  },
  text: {
    base: 'grow flex flex-col items-start gap-1',
    underline: 'font-semibold underline',
    bold: 'font-semibold',
    info: 'text-xs text-neutral-500',
    error: 'text-xs text-critical-500',
  },
  icon: {
    container: {
      base: 'rounded-full p-3.5',
      error: 'bg-critical-500/10',
      default: 'bg-primary-500/10',
      success: 'bg-success-500/10',
      disabled: 'bg-neutral-500/10',
    },
    size: 'h-6 w-6',
    error: 'fill-critical-800',
    default: 'fill-primary-800 ',
    success: 'fill-success-800',
    disabled: 'fill-neutral-800',
  },
  fileList: {
    container:
      'flex flex-col rounded-xl border border-neutral-400 overflow-hidden',
    item: {
      container:
        'relative flex justify-between gap-4 border-b border-neutral-200 px-6 py-4 last:border-none',
      content: 'flex grow items-center gap-4 truncate',
      textContainer: 'flex grow flex-col gap-1 truncate',
      progress: 'bg-primary-800 absolute inset-x-0 bottom-0 h-1 rounded-xl',
      actions: 'flex items-center gap-2 px-1',
    },
  },
  action: {
    buttonIconResponsive: {
      button: 'max-md:hidden',
      buttonIcon: 'md:hidden',
    },
  },
}

export default {
  breadcrumbs: {
    base: "flex w-full flex-wrap text-sm *:after:content-['/'] *:after:mx-1 *:after:text-neutral-400 [&>*:last-child]:after:content-none",
  },
  breadcrumbLink: {
    base: 'whitespace-nowrap',
    link: 'text-neutral-400 hover:text-neutral-800 hover:underline',
  },
  breadcrumbText: {
    base: 'truncate text-neutral-800',
  },
  breadcrumbLoading: {
    base: 'flex items-center',
    loadingBar: 'h-3 w-20',
  },
}

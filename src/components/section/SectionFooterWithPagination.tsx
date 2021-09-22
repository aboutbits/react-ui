import { ReactElement } from 'react'
import { PaginationRouter, PaginationRouterProps } from '../pagination'
import { SectionFooter } from './SectionFooter'

export function SectionFooterWithPagination({
  page,
  size,
  total,
  linkProps,
  config,
}: PaginationRouterProps): ReactElement | null {
  if (total <= size) {
    return null
  }

  return (
    <SectionFooter>
      <PaginationRouter
        linkProps={linkProps}
        page={page}
        size={size}
        total={total}
        config={config}
      />
    </SectionFooter>
  )
}

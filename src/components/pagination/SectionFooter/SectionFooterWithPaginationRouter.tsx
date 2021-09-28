import { ReactElement } from 'react'
import { PaginationRouter, PaginationRouterProps } from '../index'
import { SectionFooter } from '../../section'

export function SectionFooterWithPaginationRouter({
  page,
  size,
  total,
  config,
  className,
  linkProps,
}: PaginationRouterProps): ReactElement | null {
  if (total <= size) {
    return null
  }

  return (
    <SectionFooter>
      <PaginationRouter
        page={page}
        size={size}
        total={total}
        config={config}
        className={className}
        linkProps={linkProps}
      />
    </SectionFooter>
  )
}

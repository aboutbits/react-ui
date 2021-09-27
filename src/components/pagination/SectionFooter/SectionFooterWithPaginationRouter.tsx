import { ReactElement } from 'react'
import { PaginationRouter, PaginationRouterProps } from '../index'
import { SectionFooter } from '../../section'

export function SectionFooterWithPaginationRouter({
  page,
  size,
  total,
  config,
}: PaginationRouterProps): ReactElement | null {
  if (total <= size) {
    return null
  }

  return (
    <SectionFooter>
      <PaginationRouter page={page} size={size} total={total} config={config} />
    </SectionFooter>
  )
}

import { ReactElement } from 'react'
import { PaginationInMemory, PaginationInMemoryProps } from '../index'
import { SectionFooter } from '../../section'

export function SectionFooterWithPaginationInMemory({
  page,
  size,
  total,
  onChangePage,
  config,
  className,
}: PaginationInMemoryProps): ReactElement | null {
  if (total <= size) {
    return null
  }

  return (
    <SectionFooter>
      <PaginationInMemory
        page={page}
        size={size}
        total={total}
        onChangePage={onChangePage}
        config={config}
        className={className}
      />
    </SectionFooter>
  )
}

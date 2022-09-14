import { ReactElement } from 'react'
import { PaginationInMemory, PaginationInMemoryProps } from '../index'
import { SectionFooterArea } from '../../section'

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
    <SectionFooterArea>
      <PaginationInMemory
        page={page}
        size={size}
        total={total}
        onChangePage={onChangePage}
        config={config}
        className={className}
      />
    </SectionFooterArea>
  )
}

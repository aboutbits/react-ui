import { ReactElement } from 'react'
import { PaginationInMemory, PaginationInMemoryProps } from '../../pagination'
import { DialogFooterArea } from './DialogFooterArea'

export function DialogFooterWithPaginationInMemory({
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
    <DialogFooterArea>
      <PaginationInMemory
        page={page}
        size={size}
        total={total}
        onChangePage={onChangePage}
        config={config}
        className={className}
      />
    </DialogFooterArea>
  )
}

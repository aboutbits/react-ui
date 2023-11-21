import { PaginationInMemory, PaginationInMemoryProps } from '../../pagination'
import { SectionFooterArea, SectionFooterAreaProps } from '../index'

export type SectionFooterWithPaginationInMemoryProps = Pick<
  SectionFooterAreaProps,
  'variant'
> &
  PaginationInMemoryProps

/**
 * This component can conveniently be used to add a pagination with a section footer. This component leverages on [SectionFooter](/docs/components-section-sectionfooter--section-footer--docs) and [PaginationInMemory](/docs/components-pagination-paginationinmemory--docs).
 */
export function SectionFooterWithPaginationInMemory({
  page,
  size,
  total,
  onChangePage,
  config,
  className,
  variant,
}: SectionFooterWithPaginationInMemoryProps) {
  if (total <= size) {
    return null
  }

  return (
    <SectionFooterArea variant={variant}>
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

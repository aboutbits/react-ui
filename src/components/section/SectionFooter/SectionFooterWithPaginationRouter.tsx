import { PaginationRouter, PaginationRouterProps } from '../../pagination'
import { SectionFooterArea, SectionFooterAreaProps } from './SectionFooterArea'

export type SectionFooterWithPaginationRouterProps = Pick<
  SectionFooterAreaProps,
  'variant'
> &
  PaginationRouterProps

/**
 * This component can conveniently be used to add a pagination with a section footer. This component leverages on [SectionFooter](/docs/components-section-sectionfooter--section-footer--docs) and [PaginationRouter](/docs/components-pagination-paginationrouter--docs).
 */
export function SectionFooterWithPaginationRouter({
  page,
  size,
  total,
  config,
  className,
  linkProps,
  variant,
}: SectionFooterWithPaginationRouterProps) {
  if (total <= size) {
    return null
  }

  return (
    <SectionFooterArea variant={variant}>
      <PaginationRouter
        page={page}
        size={size}
        total={total}
        config={config}
        className={className}
        linkProps={linkProps}
      />
    </SectionFooterArea>
  )
}

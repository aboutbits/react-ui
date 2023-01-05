import { ReactElement } from 'react'
import { Breadcrumb } from './Breadcrumb'
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs'

export type BreadcrumbsLoadingProps = BreadcrumbsProps & {
  numberOfItems: number
  loadingBarClassName?: string
}

export function BreadcrumbsLoading({
  numberOfItems,
  className,
  loadingBarClassName,
}: BreadcrumbsLoadingProps): ReactElement {
  return (
    <Breadcrumbs className={className}>
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <Breadcrumb.Loading
            key={index}
            loadingBarClassName={loadingBarClassName}
          />
        ))}
    </Breadcrumbs>
  )
}

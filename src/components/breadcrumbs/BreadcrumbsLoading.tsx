import { ReactElement } from 'react'
import { LoadingBarProps } from '../loading'
import { BreadcrumbLoading } from './BreadcrumbLoading'
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs'

export type BreadcrumbsLoadingProps = BreadcrumbsProps & {
  numberOfItems: number
  loadingBarProps?: LoadingBarProps
}

export function BreadcrumbsLoading({
  numberOfItems,
  className,
  loadingBarProps,
}: BreadcrumbsLoadingProps): ReactElement {
  return (
    <Breadcrumbs className={className}>
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <BreadcrumbLoading key={index} loadingBarProps={loadingBarProps} />
        ))}
    </Breadcrumbs>
  )
}

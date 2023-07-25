import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../framework'
import { LoadingBar, LoadingBarProps } from '../loading'

export function BreadcrumbLoading({
  className,
  loadingBarProps,
}: {
  className?: string
  loadingBarProps?: LoadingBarProps
}): ReactElement {
  const { breadcrumbs } = useTheme()

  const { className: loadingBarClassName, ...restLoadingBarProps } =
    loadingBarProps || {}

  return (
    <div className={classNames(breadcrumbs.breadcrumbLoading.base, className)}>
      <LoadingBar
        className={classNames(
          breadcrumbs.breadcrumbLoading.loadingBar,
          loadingBarClassName,
        )}
        {...restLoadingBarProps}
      />
    </div>
  )
}

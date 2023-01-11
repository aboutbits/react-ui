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
  const { navigation } = useTheme()

  const { className: loadingBarClassName, ...restLoadingBarProps } =
    loadingBarProps || {}

  return (
    <div className={classNames(navigation.breadcrumbLoading.base, className)}>
      <LoadingBar
        className={classNames(
          navigation.breadcrumbLoading.loadingBar,
          loadingBarClassName
        )}
        {...restLoadingBarProps}
      />
    </div>
  )
}

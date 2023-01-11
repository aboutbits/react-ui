import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../framework'

export function BreadcrumbText({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}): ReactElement {
  const { breadcrumbs } = useTheme()

  return (
    <span className={classNames(breadcrumbs.breadcrumbText.base, className)}>
      {children}
    </span>
  )
}

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
  const { navigation } = useTheme()

  return (
    <span className={classNames(navigation.breadcrumbText.base, className)}>
      {children}
    </span>
  )
}

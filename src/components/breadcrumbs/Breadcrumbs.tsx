import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export type BreadcrumbsProps = ClassNameProps & {
  children?: ReactNode
}

export function Breadcrumbs({
  className,
  children,
}: BreadcrumbsProps): ReactElement {
  const { breadcrumbs } = useTheme()

  return (
    <div className={classNames(breadcrumbs.breadcrumbs.base, className)}>
      {children}
    </div>
  )
}

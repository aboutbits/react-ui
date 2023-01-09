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
  const { navigation } = useTheme()

  return (
    <div className={classNames(navigation.breadcrumbs.base, className)}>
      {children}
    </div>
  )
}

import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export type PaginationContainerProps = ClassNameProps & {
  children?: ReactNode
}

export function PaginationContainer({
  className,
  children,
}: PaginationContainerProps) {
  const { pagination } = useTheme()

  return (
    <div className={classNames(pagination.container.base, className)}>
      {children}
    </div>
  )
}

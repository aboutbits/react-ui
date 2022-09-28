import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export type PaginationPagesListProps = ClassNameProps & {
  children?: ReactNode
}

export function PaginationPagesList({
  className,
  children,
}: PaginationPagesListProps) {
  const { pagination } = useTheme()

  return (
    <ul className={classNames(pagination.pagesList.base, className)}>
      {children}
    </ul>
  )
}

export type PaginationPagesListItemProps = ClassNameProps & {
  children?: ReactNode
}

export function PaginationPagesListItem({
  className,
  children,
}: PaginationPagesListItemProps) {
  return <li className={className}>{children}</li>
}

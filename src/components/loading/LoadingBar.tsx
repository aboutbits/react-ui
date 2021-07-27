import classNames from 'classnames'
import { ClassNameProps } from '../types'
import { ReactElement } from 'react'

export function LoadingBar({ className }: ClassNameProps): ReactElement {
  return (
    <div
      className={classNames('rounded animate-pulse bg-loading-bar', className)}
    />
  )
}

import classNames from 'classnames'
import { ReactElement } from 'react'
import { ClassNameProps } from '../types'

export function LoadingBar({ className }: ClassNameProps): ReactElement {
  return (
    <div
      className={classNames('rounded animate-pulse bg-loading-bar', className)}
    />
  )
}

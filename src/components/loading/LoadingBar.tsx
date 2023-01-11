import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export type LoadingBarProps = ClassNameProps

export function LoadingBar({ className }: LoadingBarProps): ReactElement {
  const { loading } = useTheme()
  return <div className={classNames(loading.bar.base, className)} />
}

import classNames from 'classnames'
import { ReactElement } from 'react'
import { ClassNameProps } from '../types'
import { useTheme } from '../../designSystem/theme/ThemeContext'

export function LoadingBar({ className }: ClassNameProps): ReactElement {
  const { loading } = useTheme()
  return (
    <div
      className={classNames(loading.bar.base, loading.bar.normal, className)}
    />
  )
}

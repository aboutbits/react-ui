import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

export function LoadingBar({ className }: ClassNameProps): ReactElement {
  const { loading } = useTheme()
  return (
    <div
      className={classNames(loading.bar.base, loading.bar.normal, className)}
    />
  )
}

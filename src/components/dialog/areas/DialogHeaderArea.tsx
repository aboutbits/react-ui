import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DialogHeaderAreaProps = ClassNameProps & {
  children?: ReactNode
}

export function DialogHeaderArea({
  children,
  className,
}: DialogHeaderAreaProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div className={classNames(dialog.headerArea.base, className)}>
      {children}
    </div>
  )
}

import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DialogHeaderLeftAreaProps = ClassNameProps & {
  children?: ReactNode
}

export function DialogHeaderLeftArea({
  children,
  className,
}: DialogHeaderLeftAreaProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div className={classNames(dialog.headerLeftArea.base, className)}>
      {children}
    </div>
  )
}

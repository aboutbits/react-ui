import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DialogContentAreaProps = ClassNameProps & {
  children?: ReactNode
}

export function DialogContentArea({
  children,
  className,
}: DialogContentAreaProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div className={classNames(dialog.contentArea.base, className)}>
      {children}
    </div>
  )
}

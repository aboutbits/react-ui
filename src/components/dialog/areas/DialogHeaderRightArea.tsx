import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DialogHeaderRightAreaProps = ClassNameProps & {
  children?: ReactNode
}

export function DialogHeaderRightArea({
  children,
  className,
}: DialogHeaderRightAreaProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div className={classNames(dialog.headerRightArea.base, className)}>
      {children}
    </div>
  )
}

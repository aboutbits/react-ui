import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DialogFooterAreaProps = ClassNameProps & {
  children?: ReactNode
}

export function DialogFooterArea({
  children,
  className,
}: DialogFooterAreaProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div className={classNames(dialog.footerArea.base, className)}>
      {children}
    </div>
  )
}

import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DialogHeaderTitleProps = ClassNameProps & {
  children?: ReactNode
}

export function DialogHeaderTitle({
  children,
  className,
}: DialogHeaderTitleProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div className={classNames(dialog.headerTitle.base, className)}>
      {children}
    </div>
  )
}

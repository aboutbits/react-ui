import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { DialogHeaderGroupSpacing } from './types'

export function DialogHeaderGroup({
  spacing = DialogHeaderGroupSpacing.Sm,
  children,
  className,
}: {
  spacing?: DialogHeaderGroupSpacing
  children?: ReactNode
} & ClassNameProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div
      className={classNames(
        dialog.headerGroup.base,
        dialog.headerGroup.spacing[spacing],
        className,
      )}
    >
      {children}
    </div>
  )
}

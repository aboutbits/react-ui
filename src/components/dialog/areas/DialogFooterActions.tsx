import classNames from 'classnames'
import { ReactElement, ReactNode, useContext } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { DialogContext } from '../DialogContext'

export enum DialogFooterActionsVariant {
  start = 'start',
  center = 'center',
  end = 'end',
}

export type DialogFooterActionsProps = ClassNameProps & {
  children?: ReactNode
  variant?: DialogFooterActionsVariant
}

export function DialogFooterActions({
  children,
  variant = DialogFooterActionsVariant.end,
  className,
}: DialogFooterActionsProps): ReactElement {
  const { dialog } = useTheme()
  const { size } = useContext(DialogContext)

  return (
    <div
      className={classNames(
        dialog.footerActions.base,
        dialog.footerActions.dialogSize[size],
        dialog.footerActions.variant[variant],
        className
      )}
    >
      {children}
    </div>
  )
}

import classNames from 'classnames'
import { ReactElement, ReactNode, useContext } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { DialogContext } from './DialogContext'

export enum DialogFooterActionsPosition {
  start = 'start',
  center = 'center',
  end = 'end',
}

export type DialogFooterActionsProps = ClassNameProps & {
  children?: ReactNode
  position?: DialogFooterActionsPosition
}

export function DialogFooterActions({
  children,
  position = DialogFooterActionsPosition.end,
  className,
}: DialogFooterActionsProps): ReactElement {
  const { dialog } = useTheme()
  const { size } = useContext(DialogContext)

  return (
    <div
      className={classNames(
        dialog.footerActions.base,
        dialog.footerActions.dialogSize[size],
        dialog.footerActions.position[position],
        className
      )}
    >
      {children}
    </div>
  )
}

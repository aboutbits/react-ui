import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { DialogSize } from '../Dialog'

export enum DialogFooterActionsVariant {
  start = 'start',
  center = 'center',
  end = 'end',
}

export type DialogFooterActionsProps = ClassNameProps & {
  children?: ReactNode
  variant?: DialogFooterActionsVariant
  size?: DialogSize
}

export function DialogFooterActions({
  children,
  variant = DialogFooterActionsVariant.end,
  size = DialogSize.md,
  className,
}: DialogFooterActionsProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <div
      className={classNames(
        dialog.footerActions.base,
        dialog.footerActions.size[size],
        dialog.footerActions.variant[variant],
        className
      )}
    >
      {children}
    </div>
  )
}

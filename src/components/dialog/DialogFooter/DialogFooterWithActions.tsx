import { ReactElement } from 'react'
import {
  DialogFooterActions,
  DialogFooterActionsProps,
} from './DialogFooterActions'
import { DialogFooterArea } from './DialogFooterArea'

export type DialogFooterWithActionsProps = DialogFooterActionsProps

export function DialogFooterWithActions({
  children,
  className,
  ...props
}: DialogFooterWithActionsProps): ReactElement {
  return (
    <DialogFooterArea className={className}>
      <DialogFooterActions {...props}>{children}</DialogFooterActions>
    </DialogFooterArea>
  )
}

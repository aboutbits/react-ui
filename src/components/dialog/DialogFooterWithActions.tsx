import { ReactElement } from 'react'
import {
  DialogFooterActions,
  DialogFooterActionsProps,
} from './areas/DialogFooterActions'
import { DialogFooterArea } from './areas/DialogFooterArea'

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

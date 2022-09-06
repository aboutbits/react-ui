import { ReactElement } from 'react'
import {
  DialogContentArea,
  DialogContentAreaProps,
} from './areas/DialogContentArea'

export type DialogContentProps = DialogContentAreaProps

export function DialogContent({
  children,
  ...props
}: DialogContentProps): ReactElement {
  return <DialogContentArea {...props}>{children}</DialogContentArea>
}

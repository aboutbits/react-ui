import { MouseEventHandler, ReactElement, ReactNode } from 'react'
import { DialogHeaderCloseAction } from './actions/DialogHeaderCloseAction'
import { DialogHeaderArea } from './areas/DialogHeaderArea'
import { DialogHeaderTitle } from './areas/DialogHeaderTitle'

export type DialogHeaderWithCloseProps = {
  title?: ReactNode
  onDismiss?: MouseEventHandler<HTMLButtonElement>
}

export function DialogHeaderWithClose({
  title,
  onDismiss,
}: DialogHeaderWithCloseProps): ReactElement {
  return (
    <DialogHeaderArea>
      <DialogHeaderCloseAction onClick={onDismiss} />
      <DialogHeaderTitle>{title}</DialogHeaderTitle>
    </DialogHeaderArea>
  )
}

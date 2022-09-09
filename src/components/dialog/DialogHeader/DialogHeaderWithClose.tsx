import { MouseEventHandler, ReactElement, ReactNode } from 'react'
import { DialogHeaderArea } from './DialogHeaderArea'
import { DialogHeaderCloseAction } from './DialogHeaderCloseAction'
import { DialogHeaderRow } from './DialogHeaderRow'
import { DialogHeaderTitle } from './DialogHeaderTitle'

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
      <DialogHeaderRow>
        <DialogHeaderCloseAction onClick={onDismiss} />
        <DialogHeaderTitle>{title}</DialogHeaderTitle>
      </DialogHeaderRow>
    </DialogHeaderArea>
  )
}

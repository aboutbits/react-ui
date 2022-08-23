import { ReactElement, ReactNode } from 'react'
import { DialogHeaderArea } from './DialogHeaderArea'
import { DialogHeaderTitle } from './DialogHeaderTitle'

export function DialogHeaderMain({
  title,
}: {
  title?: ReactNode
}): ReactElement {
  return (
    <DialogHeaderArea>
      <DialogHeaderTitle>{title}</DialogHeaderTitle>
    </DialogHeaderArea>
  )
}

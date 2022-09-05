import { ReactElement, ReactNode } from 'react'
import { DialogHeaderArea } from './areas/DialogHeaderArea'
import { DialogHeaderTitle } from './areas/DialogHeaderTitle'

export function DialogHeader({ title }: { title?: ReactNode }): ReactElement {
  return (
    <DialogHeaderArea>
      <DialogHeaderTitle>{title}</DialogHeaderTitle>
    </DialogHeaderArea>
  )
}

import { ReactElement, ReactNode } from 'react'
import { DialogHeaderArea } from './areas/DialogHeaderArea'
import { DialogHeaderTitle } from './areas/DialogHeaderTitle'

export type DialogHeaderProps = {
  title?: ReactNode
  className?: string
}

export function DialogHeader({
  title,
  className,
}: DialogHeaderProps): ReactElement {
  return (
    <DialogHeaderArea className={className}>
      <DialogHeaderTitle>{title}</DialogHeaderTitle>
    </DialogHeaderArea>
  )
}

import { ReactElement, ReactNode } from 'react'
import { DialogHeaderArea } from './DialogHeaderArea'
import { DialogHeaderTitle } from './DialogHeaderTitle'

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

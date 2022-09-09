import { ReactElement, ReactNode } from 'react'
import { DialogContentArea, DialogContentAreaProps } from './DialogContentArea'

export type DialogContentListProps = DialogContentAreaProps & {
  children?: ReactNode
  className?: string
}

export function DialogContentList({
  children,
  className,
  ...props
}: DialogContentListProps): ReactElement {
  return (
    <DialogContentArea className={className} {...props}>
      {children}
    </DialogContentArea>
  )
}

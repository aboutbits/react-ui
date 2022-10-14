import { MouseEventHandler, ReactElement, ReactNode } from 'react'
import { ClassNameProps } from '../../types'
import { DialogHeaderArea } from './DialogHeaderArea'
import { DialogHeaderCloseAction } from './DialogHeaderCloseAction'
import { DialogHeaderRow } from './DialogHeaderRow'
import { DialogHeaderTitle } from './DialogHeaderTitle'

export type DialogHeaderWithCloseProps = ClassNameProps & {
  title?: ReactNode
  onDismiss?: MouseEventHandler<HTMLButtonElement>
}

export function DialogHeaderWithClose({
  title,
  onDismiss,
  className,
}: DialogHeaderWithCloseProps): ReactElement {
  return (
    <DialogHeaderArea className={className}>
      <DialogHeaderRow>
        <DialogHeaderCloseAction onClick={onDismiss} />
        <DialogHeaderTitle>{title}</DialogHeaderTitle>
      </DialogHeaderRow>
    </DialogHeaderArea>
  )
}

import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { MouseEventHandler, ReactElement, ReactNode } from 'react'
import { ButtonIcon, Variant } from '../button'
import { Tone } from '../types'
import { DialogHeaderArea } from './areas/DialogHeaderArea'
import { DialogHeaderLeftArea } from './areas/DialogHeaderLeftArea'
import { DialogHeaderTitle } from './areas/DialogHeaderTitle'

export type DialogHeaderCloseProps = {
  title?: ReactNode
  onDismiss?: MouseEventHandler<HTMLButtonElement>
}

export function DialogHeaderClose({
  title,
  onDismiss,
}: DialogHeaderCloseProps): ReactElement {
  return (
    <DialogHeaderArea>
      <DialogHeaderLeftArea>
        <ButtonIcon
          icon={IconClose}
          variant={Variant.transparent}
          tone={Tone.neutral}
          onClick={onDismiss}
        />
      </DialogHeaderLeftArea>
      <DialogHeaderTitle>{title}</DialogHeaderTitle>
    </DialogHeaderArea>
  )
}

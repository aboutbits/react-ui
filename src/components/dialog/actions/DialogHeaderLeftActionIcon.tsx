import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { ButtonIcon, ButtonIconProps, Variant } from '../../button'
import { Tone } from '../../types'
import { DialogHeaderLeftArea } from '../areas/DialogHeaderLeftArea'

export type DialogHeaderLeftActionIconProps = Omit<
  ButtonIconProps,
  'variant' | 'ref'
>

export function DialogHeaderLeftActionIcon(
  props: DialogHeaderLeftActionIconProps
): ReactElement {
  const { dialog } = useTheme()

  return (
    <DialogHeaderLeftArea className={dialog.headerLeftActionIcon.base}>
      <ButtonIcon
        variant={Variant.transparent}
        tone={Tone.neutral}
        {...props}
      />
    </DialogHeaderLeftArea>
  )
}

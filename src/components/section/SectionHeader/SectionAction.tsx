import { ReactElement } from 'react'
import { ButtonIcon, ButtonIconProps, Variant } from '../../button'
import { Tone } from '../../types'

export type SectionActionProps = Omit<ButtonIconProps, 'ref'>

export function SectionAction(props: SectionActionProps): ReactElement {
  return (
    <ButtonIcon variant={Variant.transparent} tone={Tone.neutral} {...props} />
  )
}

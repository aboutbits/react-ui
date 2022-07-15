import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { ButtonIcon, ButtonIconProps, Size, Variant } from '../../button'
import { Tone } from '../../types'

export type SectionActionProps = Omit<ButtonIconProps, 'ref'>

export function SectionAction(props: SectionActionProps): ReactElement {
  const { section } = useTheme()

  return (
    <ButtonIcon
      size={Size.sm}
      variant={Variant.transparent}
      tone={Tone.neutral}
      className={classNames(section.action.base)}
      {...props}
    />
  )
}

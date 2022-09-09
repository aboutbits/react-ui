import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { ButtonIcon, ButtonIconProps, Variant } from '../../button'
import { Tone } from '../../types'

export type DialogHeaderLeftActionIconProps = Omit<
  ButtonIconProps,
  'variant' | 'ref'
>

export function DialogHeaderLeftActionIcon({
  className,
  ...props
}: DialogHeaderLeftActionIconProps): ReactElement {
  const { dialog } = useTheme()

  return (
    <ButtonIcon
      variant={Variant.transparent}
      tone={Tone.neutral}
      className={classNames(dialog.headerLeftActionIcon.base, className)}
      {...props}
    />
  )
}

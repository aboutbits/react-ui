import classNames from 'classnames'
import { forwardRef } from 'react'
import { useTheme } from '../../../framework'
import { ButtonIcon, ButtonIconProps, ButtonVariant } from '../../button'
import { Tone } from '../../types'

export type DialogHeaderLeftActionIconProps = Omit<
  ButtonIconProps,
  'variant' | 'ref'
>

export const DialogHeaderLeftActionIcon = forwardRef<
  HTMLButtonElement,
  DialogHeaderLeftActionIconProps
>(function DialogHeaderLeftActionIcon({ className, ...props }, ref) {
  const { dialog } = useTheme()

  return (
    <ButtonIcon
      ref={ref}
      variant={ButtonVariant.Transparent}
      tone={Tone.Neutral}
      className={classNames(dialog.headerLeftActionIcon.base, className)}
      {...props}
    />
  )
})

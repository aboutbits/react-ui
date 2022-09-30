import React from 'react'
import classNames from 'classnames'
import { useTheme } from '../../framework'
import { Mode, Tone } from '../types'
import { ButtonIconCommonProps, ButtonStyleProps, Size, Variant } from './types'

export type ButtonIconProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonStyleProps &
  ButtonIconCommonProps

const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      mode = Mode.light,
      variant = Variant.solid,
      size = Size.md,
      tone = Tone.primary,
      icon: Icon,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const { button } = useTheme()

    return (
      <button
        className={classNames(
          /* eslint-disable @typescript-eslint/ban-ts-comment */
          button.buttonIcon.base,
          !props.disabled
            ? // @ts-ignore
              button.modeVariantTone[mode][variant][tone]
            : button.modeVariantTone[mode][variant].disabled,
          button.buttonIcon.variantSize.base[size],
          // @ts-ignore
          button.buttonIcon.variantSize[variant]?.[size],
          /* eslint-enable */
          className
        )}
        aria-label={label}
        type="button"
        ref={ref}
        {...props}
      >
        <Icon
          className={classNames(
            button.buttonIcon.icon.base,
            button.buttonIcon.icon.size[size]
          )}
        />
      </button>
    )
  }
)

ButtonIcon.displayName = 'ButtonIcon'

export { ButtonIcon }

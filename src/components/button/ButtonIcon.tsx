import React from 'react'
import classNames from 'classnames'
import { useTheme } from '../../framework'
import { Tone } from '../types'
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
              button.variantTone[variant][tone]
            : button.variantTone[variant].disabled,
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

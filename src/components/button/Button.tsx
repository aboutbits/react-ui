import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../../framework'
import { Mode, Size, Tone } from '../types'
import { ButtonCommonProps, ButtonStyleProps, ButtonVariant } from './types'

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonStyleProps &
  ButtonCommonProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      mode = Mode.light,
      variant = ButtonVariant.solid,
      size = Size.md,
      tone = Tone.primary,
      iconStart: IconStart,
      iconEnd: IconEnd,
      type = 'button',
      className,
      children,
      ...props
    },
    ref
  ) {
    const { button } = useTheme()
    return (
      <button
        className={classNames(
          /* eslint-disable @typescript-eslint/ban-ts-comment */
          button.button.base,
          !props.disabled
            ? // @ts-ignore
              button.modeVariantTone[mode][variant][tone]
            : button.modeVariantTone[mode][variant].disabled,
          button.button.variantSize.base[size],
          // @ts-ignore
          button.button.variantSize[variant]?.[size],
          /* eslint-enable */
          className
        )}
        ref={ref}
        type={type}
        {...props}
      >
        {IconStart && (
          <IconStart
            className={classNames(
              button.button.icon.base,
              button.button.icon.size[size],
              button.button.icon.iconStart.size[size]
            )}
          />
        )}
        {children}
        {IconEnd && (
          <IconEnd
            className={classNames(
              button.button.icon.base,
              button.button.icon.size[size],
              button.button.icon.iconEnd.size[size]
            )}
          />
        )}
      </button>
    )
  }
)

import classNames from 'classnames'
import { forwardRef } from 'react'
import { useTheme } from '../../framework'
import { Mode, Size, Tone } from '../types'
import { ButtonCommonProps, ButtonStyleProps, ButtonVariant } from './types'

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonStyleProps &
  ButtonCommonProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      mode = Mode.Light,
      variant = ButtonVariant.Solid,
      size = Size.Md,
      tone = Tone.Primary,
      iconStart: IconStart,
      iconEnd: IconEnd,
      type = 'button',
      className,
      children,
      ...props
    },
    ref,
  ) {
    const { button } = useTheme()
    return (
      <button
        className={classNames(
          button.button.base,
          props.disabled
            ? button.modeVariantTone[mode][variant].disabled
            : button.modeVariantTone[mode][variant][tone],
          button.button.variantSize.base,
          button.button.variantSize[variant][size],
          className,
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
              button.button.icon.iconStart.size[size],
            )}
          />
        )}
        {children}
        {IconEnd && (
          <IconEnd
            className={classNames(
              button.button.icon.base,
              button.button.icon.size[size],
              button.button.icon.iconEnd.size[size],
            )}
          />
        )}
      </button>
    )
  },
)

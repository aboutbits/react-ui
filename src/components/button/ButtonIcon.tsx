import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { useTheme } from '../../framework'
import { Tone } from '../types'
import { Size, Variant } from './types'

export type ButtonIconProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /**
   * Defines the icon of the button.
   **/
  icon: ComponentType<IconProps>
  /**
   * Sets a label for [aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php).
   **/
  label?: string
  /**
   * Defines the variant of the button.
   **/
  variant?: Variant
  /**
   * Defines the size of the button.
   **/
  size?: Size
  /**
   * Defines the tone of the button. Basically the color, so be sure to have the colors defined in Tailwind.
   * You need at least: DEFAULT, 700
   **/
  tone?: Tone | string
}

const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      icon: Icon,
      label,
      className,
      variant = Variant.solid,
      size = Size.md,
      tone = Tone.primary,
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

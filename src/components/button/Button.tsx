import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../../framework'
import { Tone } from '../types'
import { Size, Variant } from './types'

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = Variant.solid,
      size = Size.md,
      tone = Tone.primary,
      type = 'button',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const { button } = useTheme()
    return (
      <button
        className={classNames(
          /* eslint-disable @typescript-eslint/ban-ts-comment */
          button.button.base,
          !props.disabled
            ? // @ts-ignore
              button.variantTone[variant][tone]
            : button.variantTone[variant].disabled,
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
        {children}
      </button>
    )
  }
)

// This improves readability in dev tools
Button.displayName = 'Button'

export { Button }

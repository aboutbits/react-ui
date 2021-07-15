import classNames from 'classnames'
import React from 'react'

export enum Variant {
  solid = 'solid',
  ghost = 'ghost',
  transparent = 'transparent',
}

export enum Size {
  md = 'md',
  sm = 'sm',
}

export enum Tone {
  primary = 'primary',
  critical = 'critical',
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Defines the variant of the button.
   */
  variant?: Variant
  /**
   * Defines the size of the button.
   */
  size?: Size
  /**
   * Defines the tone of the button. Basically the color, so be sure to have the colors defined in Tailwind.
   * You need at least: DEFAULT, 700
   */
  tone?: Tone | string

  /**
   * If you set gradient to true, it will make the solid button with a background gradient from 500 -> 700 and on hover from 700 - 900.
   */
  gradient?: boolean
}

function calculateToneStyle(
  parameters: Required<Pick<ButtonProps, 'variant' | 'tone' | 'gradient'>>
): { toneClass: string; toneClassDisabled: string } {
  if (parameters.variant === Variant.solid) {
    return {
      toneClass: `border-transparent bg-${parameters.tone} hover:bg-${parameters.tone}-700 focus:bg-${parameters.tone}-700 text-white font-bold`,
      toneClassDisabled: `border-transparent bg-gray-300 text-gray-500`,
    }
  } else if (parameters.variant === Variant.ghost) {
    return {
      toneClass: `border-${parameters.tone} hover:border-${parameters.tone}-700 bg-transparent text-${parameters.tone} hover:text-${parameters.tone}-700 font-bold`,
      toneClassDisabled: `border-gray-500 bg-transparent text-gray-500`,
    }
  } else if (parameters.variant === Variant.transparent) {
    return {
      toneClass: `border-transparent background-transparent text-${parameters.tone} hover:text-${parameters.tone}-700 underline`,
      toneClassDisabled: `border-transparent background-gray-300 text-gray-500 underline`,
    }
  }

  return {
    toneClass: '',
    toneClassDisabled: '',
  }
}

const sizeStyles: Record<Size, string> = {
  [Size.sm]: 'border px-2 py-1',
  [Size.md]: 'border-2 px-4 py-3 text-lg leading-normal',
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = Variant.solid,
      size = Size.md,
      tone = Tone.primary,
      gradient = false,
      type = 'button',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const toneStyles = calculateToneStyle({ variant, tone, gradient })

    return (
      <button
        className={classNames(
          'focus:outline-none fill-current',
          props.disabled ? toneStyles.toneClassDisabled : toneStyles.toneClass,
          sizeStyles[size],
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

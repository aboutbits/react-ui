import classNames from 'classnames'
import React from 'react'

import styles from './Button.module.css'

export enum Variant {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
}

export enum Size {
  md = 'md',
  sm = 'sm',
}

export type ButtonProps = {
  variant: Variant
  size?: Size
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const variantStyles: Record<
  Variant,
  { variantClass: string; variantDisabledClass: string }
> = {
  [Variant.primary]: {
    variantClass:
      'bg-gradient-to-r from-primary to-primary-700 hover:from-primary-700 hover:to-primary-900 focus:from-primary-700 focus:to-primary-900 font-bold text-white text-xl ' +
      styles['leading-button'],
    variantDisabledClass:
      'bg-primary-50 font-bold text-gray text-xl ' + styles['leading-button'],
  },
  [Variant.secondary]: {
    variantClass:
      'border-2 border-primary font-bold text-primary hover:border-primary-700 hover:text-primary-700 focus:border-primary-700 focus:text-primary-700 text-xl ' +
      styles['leading-button'],
    variantDisabledClass: 'text-gray-500 text-xl ',
  },
  [Variant.danger]: {
    variantClass:
      'text-red-400 underline hover:text-red-800 focus:text-red-800',
    variantDisabledClass: 'text-gray-500',
  },
}

const sizeStyles: Record<Size, string> = {
  [Size.sm]: 'px-2 py-1',
  [Size.md]: 'min-w-50 px-4 py-3',
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size = Size.md,
      type = 'button',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={classNames(
          'focus:outline-none fill-current',
          props.disabled
            ? variantStyles[variant].variantDisabledClass
            : variantStyles[variant].variantClass,
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

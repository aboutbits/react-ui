import React from 'react'
import classNames from 'classnames'

export enum Variant {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
}

export enum Size {
  sm = 'sm',
  md = 'md',
}

export type ButtonProps = {
  variant: Variant
  size?: Size
}

const variantStyles: Record<
  Variant,
  { variantClass: string; variantDisabledClass: string }
> = {
  [Variant.primary]: {
    variantClass:
      'rounded border shadow text-black bg-primary border-primary hover:bg-primary-light hover:border-primary-light focus:border-primary-light focus:bg-primary-light',
    variantDisabledClass:
      'rounded border text-gray-darker bg-gray-light border-gray-light',
  },
  [Variant.secondary]: {
    variantClass:
      'rounded hover:bg-gray-lightest focus:bg-gray-lightest text-black',
    variantDisabledClass: 'text-gray-light',
  },
  [Variant.danger]: {
    variantClass:
      'rounded border shadow text-white bg-red border-red hover:bg-red-light hover:border-red-light focus:border-red-light focus:bg-red-light',
    variantDisabledClass:
      'rounded border text-gray-darker bg-gray-light border-gray-light',
  },
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 font-medium text-xs',
  md: 'px-4 py-2 leading-normal font-semibold',
}

const Button: React.FC<
  ButtonProps &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ variant, size = Size.md, className = '', children, ...props }) => {
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
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }

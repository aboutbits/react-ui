import classNames from 'classnames'
import React from 'react'
import { useLinkComponent, LinkComponentProps, useTheme } from '../../framework'

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
  secondary = 'secondary',
}

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
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
          button.button.base,
          button.button.variantTone[variant].base,
          !props.disabled
            /* eslint-disable */
            ? // @ts-ignore
              button.button.variantTone[variant][tone]
            : button.button.variantTone[variant].disabled,
            /* eslint-enable */
          button.button.size[size],
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

type ButtonLinkProps = Pick<ButtonProps, 'variant' | 'size' | 'tone'> &
  LinkComponentProps & {
    disabled?: boolean
  }

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      variant = Variant.solid,
      size = Size.md,
      tone = Tone.primary,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const LinkComponent = useLinkComponent()
    const { button } = useTheme()

    return (
      <LinkComponent
        {...props}
        ref={ref}
        className={classNames(
          button.button.base,
          button.button.variantTone[variant].base,
          !props.disabled
            /* eslint-disable */
            ? // @ts-ignore
              button.button.variantTone[variant][tone]
            : button.button.variantTone[variant].disabled,
            /* eslint-enable */
          button.button.size[size],
          className
        )}
      >
        {children}
      </LinkComponent>
    )
  }
)

// This improves readability in dev tools
ButtonLink.displayName = 'ButtonLink'

export { Button, ButtonLink }

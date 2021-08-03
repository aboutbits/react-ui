import classNames from 'classnames'
import React from 'react'
import { useLinkComponent } from '../../designSystem/link/LinkComponentContext'
import { LinkComponentProps } from '../../designSystem/link/types'
import { useTheme } from '../../designSystem/theme/ThemeContext'

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

function calculateToneStyle(
  parameters: Required<Pick<ButtonProps, 'variant' | 'tone'>>
): { toneClass: string; toneClassDisabled: string } {
  const tone = {
    toneClass: '',
    toneClassDisabled: '',
  }

  if (parameters.variant === Variant.solid) {
    tone.toneClass = `border-transparent bg-${parameters.tone} hover:bg-${parameters.tone}-700 focus:bg-${parameters.tone}-700 text-white font-bold`
    tone.toneClassDisabled = `border-transparent bg-gray-50 text-gray`
  } else if (parameters.variant === Variant.ghost) {
    tone.toneClass = `border-${parameters.tone} hover:border-${parameters.tone}-700 bg-transparent text-${parameters.tone} hover:text-${parameters.tone}-700 font-bold`
    tone.toneClassDisabled = `border-gray-500 bg-transparent text-gray`
  } else if (parameters.variant === Variant.transparent) {
    tone.toneClass = `border-transparent background-transparent text-${parameters.tone} hover:text-${parameters.tone}-700 underline`
    tone.toneClassDisabled = `border-transparent background-gray-50 text-gray underline`
  }

  //double control if gradient is needed at all
  //however, there is still a flaw within tailwind, such that the border is no transparent...
  /*
  if (parameters.gradient === true && parameters.variant === Variant.solid) {
    tone.toneClass = `border-0 border-transparent bg-gradient-to-br from-${parameters.tone}-400 to-${parameters.tone}-700 hover:from-${parameters.tone}-700 hover:to-${parameters.tone}-900 focus:from-${parameters.tone}-700 focus:to-${parameters.tone}-900 text-white font-bold`
  }
  */
  return tone
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
    const toneStyles = calculateToneStyle({ variant, tone })
    const { button } = useTheme()
    return (
      <button
        className={classNames(
          button.button.base,
          props.disabled ? toneStyles.toneClassDisabled : toneStyles.toneClass,
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
    const toneStyles = calculateToneStyle({ variant, tone })
    const { button } = useTheme()

    return (
      <LinkComponent
        {...props}
        ref={ref}
        className={classNames(
          button.buttonLink.base,
          props.disabled ? toneStyles.toneClassDisabled : toneStyles.toneClass,
          button.buttonLink.size[size],
          className
        )}
      >
        {children}
      </LinkComponent>
    )
  }
)

export { Button, ButtonLink }

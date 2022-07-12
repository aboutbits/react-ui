import classNames from 'classnames'
import React, { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { LinkComponentProps, useLinkComponent, useTheme } from '../../framework'
import { Tone } from '../types'
import { Size, Variant } from './types'

export type ButtonIconLinkProps = {
  /**
   * Defines the icon of the button.
   **/
  icon: ComponentType<IconProps>
  /**
   * Define the accessibility label for the icon.
   **/
  label: string
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
   **/
  tone?: Tone | string
  /**
   * Disables the link
   */
  disabled?: boolean
} & LinkComponentProps

const ButtonIconLink = React.forwardRef<HTMLAnchorElement, ButtonIconLinkProps>(
  (
    {
      href,
      icon: Icon,
      internal = true,
      disabled = false,
      label,
      variant = Variant.solid,
      size = Size.md,
      tone = Tone.primary,
      className,
      ...props
    },
    ref
  ) => {
    const { button } = useTheme()
    const LinkComponent = useLinkComponent()

    const linkClassNames = classNames(
      /* eslint-disable @typescript-eslint/ban-ts-comment */
      button.buttonIcon.base,
      !disabled
        ? // @ts-ignore
          button.variantTone[variant][tone]
        : button.variantTone[variant].disabled,
      button.buttonIcon.variantSize.base[size],
      // @ts-ignore
      button.buttonIcon.variantSize[variant]?.[size],
      /* eslint-enable */
      className
    )

    const icon = (
      <Icon
        className={classNames(
          button.buttonIcon.icon.base,
          button.buttonIcon.icon.size[size]
        )}
      />
    )

    if (disabled) {
      return (
        <a
          {...props}
          ref={ref}
          className={linkClassNames}
          role="link"
          aria-disabled={true}
          aria-label={label}
        >
          {icon}
        </a>
      )
    }

    return (
      <LinkComponent
        ref={ref}
        href={href}
        internal={internal}
        aria-label={label}
        className={linkClassNames}
      >
        {icon}
      </LinkComponent>
    )
  }
)

// This improves readability in dev tools
ButtonIconLink.displayName = 'ButtonIconLink'

export { ButtonIconLink }

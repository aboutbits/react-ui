import classNames from 'classnames'
import React from 'react'
import { LinkComponentProps, useLinkComponent, useTheme } from '../../framework'
import { Tone } from '../types'
import {
  ButtonIconCommonProps,
  ButtonStyleProps,
  LinkCommonProps,
  Size,
  Variant,
} from './types'

export type ButtonIconLinkProps = LinkComponentProps &
  ButtonStyleProps &
  ButtonIconCommonProps &
  LinkCommonProps

const ButtonIconLink = React.forwardRef<HTMLAnchorElement, ButtonIconLinkProps>(
  (
    {
      href,
      variant = Variant.solid,
      size = Size.md,
      tone = Tone.primary,
      icon: Icon,
      internal = true,
      disabled = false,
      label,
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

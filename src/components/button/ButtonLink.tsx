import classNames from 'classnames'
import React from 'react'
import { useLinkComponent, LinkComponentProps, useTheme } from '../../framework'
import { Tone } from '../types'
import { ButtonProps } from './Button'
import { Size, Variant } from './types'

export type ButtonLinkProps = Pick<
  ButtonProps,
  'variant' | 'size' | 'tone' | 'iconStart' | 'iconEnd'
> &
  LinkComponentProps & {
    disabled?: boolean
  }

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      variant = Variant.solid,
      size = Size.md,
      tone = Tone.primary,
      iconStart: IconStart,
      iconEnd: IconEnd,
      href,
      className = '',
      internal = true,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const LinkComponent = useLinkComponent()
    const { button } = useTheme()

    const linkClassNames = classNames(
      /* eslint-disable @typescript-eslint/ban-ts-comment */
      button.buttonLink.base,
      button.button.base,
      !disabled
        ? // @ts-ignore
          button.variantTone[variant][tone]
        : button.variantTone[variant].disabled,
      button.button.variantSize.base[size],
      // @ts-ignore
      button.button.variantSize[variant]?.[size],
      /* eslint-enable */
      className
    )

    if (disabled) {
      return (
        <a
          {...props}
          ref={ref}
          className={linkClassNames}
          role="link"
          aria-disabled={true}
        >
          {children}
        </a>
      )
    }

    return (
      <LinkComponent
        {...props}
        internal={internal}
        ref={ref}
        href={href}
        className={linkClassNames}
      >
        {IconStart && (
          <IconStart
            className={classNames(
              button.button.icon.base,
              button.button.icon.size[size],
              button.button.icon.iconStart.size[size]
            )}
          />
        )}
        {children}
        {IconEnd && (
          <IconEnd
            className={classNames(
              button.button.icon.base,
              button.button.icon.size[size],
              button.button.icon.iconEnd.size[size]
            )}
          />
        )}
      </LinkComponent>
    )
  }
)

// This improves readability in dev tools
ButtonLink.displayName = 'ButtonLink'

export { ButtonLink }
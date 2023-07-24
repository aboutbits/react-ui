import classNames from 'classnames'
import React from 'react'
import { useLinkComponent, LinkComponentProps, useTheme } from '../../framework'
import { Mode, Size, Tone } from '../types'
import {
  ButtonCommonProps,
  ButtonStyleProps,
  LinkCommonProps,
  ButtonVariant,
} from './types'

export type ButtonLinkProps = LinkComponentProps &
  ButtonStyleProps &
  ButtonCommonProps &
  LinkCommonProps

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    {
      href,
      mode = Mode.light,
      variant = ButtonVariant.solid,
      size = Size.md,
      tone = Tone.primary,
      iconStart: IconStart,
      iconEnd: IconEnd,
      internal = true,
      disabled = false,
      className,
      children,
      ...props
    },
    ref,
  ) {
    const LinkComponent = useLinkComponent()
    const { button } = useTheme()

    const linkClassNames = classNames(
      /* eslint-disable @typescript-eslint/ban-ts-comment */
      button.button.base,
      !disabled
        ? // @ts-expect-error
          button.modeVariantTone[mode][variant][tone]
        : button.modeVariantTone[mode][variant].disabled,
      button.button.variantSize.base[size],
      // @ts-expect-error
      button.button.variantSize[variant]?.[size],
      /* eslint-enable */
      className,
    )

    const content = (
      <>
        {IconStart && (
          <IconStart
            className={classNames(
              button.button.icon.base,
              button.button.icon.size[size],
              button.button.icon.iconStart.size[size],
            )}
          />
        )}
        {children}
        {IconEnd && (
          <IconEnd
            className={classNames(
              button.button.icon.base,
              button.button.icon.size[size],
              button.button.icon.iconEnd.size[size],
            )}
          />
        )}
      </>
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
          {content}
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
        {content}
      </LinkComponent>
    )
  },
)

import classNames from 'classnames'
import { forwardRef } from 'react'
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

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    {
      href,
      mode = Mode.Light,
      variant = ButtonVariant.Solid,
      size = Size.Md,
      tone = Tone.Primary,
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
      button.button.base,
      disabled
        ? button.modeVariantTone[mode][variant].disabled
        : button.modeVariantTone[mode][variant][tone],
      button.button.variantSize[
        variant === ButtonVariant.Ghost ? variant : 'base'
      ][size],
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

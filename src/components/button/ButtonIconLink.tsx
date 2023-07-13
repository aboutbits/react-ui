import classNames from 'classnames'
import React from 'react'
import { LinkComponentProps, useLinkComponent, useTheme } from '../../framework'
import { Mode, Size, Tone } from '../types'
import {
  ButtonIconCommonProps,
  ButtonStyleProps,
  LinkCommonProps,
  ButtonVariant,
} from './types'

export type ButtonIconLinkProps = LinkComponentProps &
  ButtonStyleProps &
  ButtonIconCommonProps &
  LinkCommonProps

export const ButtonIconLink = React.forwardRef<
  HTMLAnchorElement,
  ButtonIconLinkProps
>(function ButtonIconLink(
  {
    href,
    mode = Mode.Light,
    variant = ButtonVariant.Solid,
    size = Size.Md,
    tone = Tone.Primary,
    icon: Icon,
    internal = true,
    disabled = false,
    label,
    className,
    ...props
  },
  ref
) {
  const { button } = useTheme()
  const LinkComponent = useLinkComponent()

  const linkClassNames = classNames(
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    button.buttonIcon.base,
    !disabled
      ? // @ts-ignore
        button.modeVariantTone[mode][variant][tone]
      : button.modeVariantTone[mode][variant].disabled,
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
      {...props}
      ref={ref}
      href={href}
      internal={internal}
      aria-label={label}
      className={linkClassNames}
    >
      {icon}
    </LinkComponent>
  )
})

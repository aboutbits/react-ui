import classNames from 'classnames'
import { forwardRef } from 'react'
import { LinkComponentProps, useLinkComponent, useTheme } from '../../framework'
import { Mode, Size, Tone } from '../types'
import {
  ButtonIconCommonProps,
  ButtonStyleProps,
  ButtonVariant,
  LinkCommonProps,
} from './types'

export type ButtonIconLinkProps = LinkComponentProps &
  ButtonStyleProps &
  ButtonIconCommonProps &
  LinkCommonProps

export const ButtonIconLink = forwardRef<
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
  ref,
) {
  const { button } = useTheme()
  const LinkComponent = useLinkComponent()

  const linkClassNames = classNames(
    button.buttonIcon.base,
    !disabled
      ? button.modeVariantTone[mode][variant][tone]
      : button.modeVariantTone[mode][variant].disabled,
    button.buttonIcon.variantSize[variant][size],
    className,
  )

  const icon = (
    <Icon
      className={classNames(
        button.buttonIcon.icon.base,
        button.buttonIcon.icon.size[size],
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

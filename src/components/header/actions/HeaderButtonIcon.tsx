import React, { ComponentType, ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { ButtonIcon, ButtonIconProps } from '../../button'
import { IconProps, Size } from '../../types'

export type HeaderButtonIconProps = Omit<ButtonIconProps, 'ref'> & {
  /**
   * Defines the icon of the button.
   **/
  icon: ComponentType<IconProps>
  /**
   * Sets a label for [aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php).
   **/
  label?: string
  /**
   * Defines which action should be executed on clicking.
   **/
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function HeaderButtonIcon({
  label,
  onClick,
  icon,
  className,
  ...props
}: HeaderButtonIconProps): ReactElement {
  const { header } = useTheme()

  return (
    <span className={className}>
      <ButtonIcon
        onClick={onClick}
        icon={icon}
        label={label}
        size={Size.Md}
        className={header.buttonIcon.mobile}
        {...props}
      />
      <ButtonIcon
        onClick={onClick}
        icon={icon}
        label={label}
        size={Size.Lg}
        className={header.buttonIcon.desktop}
        {...props}
      />
    </span>
  )
}

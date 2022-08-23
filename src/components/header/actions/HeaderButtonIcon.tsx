import React, { ComponentType, ReactElement } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { ClassNameProps, Tone } from '../../types'
import { ButtonIcon, Size, Variant } from '../../button'
import { useTheme } from '../../../framework'

export type HeaderButtonIconProps = ClassNameProps & {
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
}: HeaderButtonIconProps): ReactElement {
  const { header } = useTheme()

  return (
    <span className={className}>
      <ButtonIcon
        onClick={onClick}
        icon={icon}
        label={label}
        variant={Variant.transparent}
        tone={Tone.neutral}
        size={Size.md}
        className={header.buttonIcon.mobile}
      />
      <ButtonIcon
        onClick={onClick}
        icon={icon}
        label={label}
        variant={Variant.transparent}
        tone={Tone.neutral}
        size={Size.lg}
        className={header.buttonIcon.desktop}
      />
    </span>
  )
}

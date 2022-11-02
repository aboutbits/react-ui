import { ComponentType } from 'react'
import { IconProps, ModeProps, Size, Tone } from '../types'

export enum ButtonVariant {
  solid = 'solid',
  ghost = 'ghost',
  transparent = 'transparent',
}

export type ButtonStyleProps = ModeProps & {
  /**
   * Defines the variant of the button.
   **/
  variant?: ButtonVariant
  /**
   * Defines the size of the button.
   **/
  size?: Size
  /**
   * Defines the tone of the button. Basically the color, so be sure to have the colors defined in Tailwind.
   **/
  tone?: Tone | string
}

export type ButtonCommonProps = {
  /**
   * Defines the icon at the start of the button.
   **/
  iconStart?: ComponentType<IconProps>
  /**
   * Defines the icon at the end of the button.
   **/
  iconEnd?: ComponentType<IconProps>
}

export type ButtonIconCommonProps = {
  /**
   * Defines the icon of the button.
   **/
  icon: ComponentType<IconProps>
  /**
   * Sets a label for [aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php).
   **/
  label?: string
}

export type LinkCommonProps = {
  /**
   * Sets the link to disabled state.
   */
  disabled?: boolean
}

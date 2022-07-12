import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { ComponentType } from 'react'
import { Tone } from '../types'

export enum Variant {
  solid = 'solid',
  ghost = 'ghost',
  transparent = 'transparent',
}

export enum Size {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export type ButtonStyleProps = {
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

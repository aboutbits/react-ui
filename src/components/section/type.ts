import { ReactNode } from 'react'

export type ToneBackgroundProps = {
  /**
   * Defines the tone of the background. Basically the color, so be sure to have it defined in Tailwind.
   * */
  backgroundColor?: string
}
export type ClassNameProps = {
  /**
   * Adjusting individual style with any CSS class.
   * */
  className?: string
}
export type TitleReactProps = {
  /**
   * Defines the title of the section header.
   * */
  title: ReactNode
}
export type ActionIconProps = {
  /**
   * Defines a React element what could be a string, any, or a JSXElementConstructor.
   * */
  actionIcon: ReactNode
}

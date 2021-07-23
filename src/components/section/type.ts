import { ReactNode } from 'react'

export type BackgroundColorProps = {
  /**
   * Defines the color of the background. It uses the tailwind background notation `bg-${backgroundColor}` under the hood.
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
  action: ReactNode
}

export type ContentReactProps = {
  /**
   * Defines the content of the section item.
   * */
  content: ReactNode
}

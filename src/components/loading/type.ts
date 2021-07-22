import { ReactNode } from 'react'

export type ToneProps = {
  /**
   * Defines the background color of the bar. It uses the tailwind background notation `bg-${backgroundColor}` under the hood.
   */
  backgroundColor?: string
}

export type ClassNameProps = {
  /**
   * Adjusting individual the style with any css class.
   */
  className?: string
}

export type NumberOfItemsProps = {
  /**
   * Defines the number of items in the section.
   */
  numberOfItems: number
}

export type SectionHeaderReactProps = {
  /**
   * Defines the title of the section.
   */
  sectionHeader: ReactNode
}

export type ToneSectionBackgroundProps = {
  /**
   * Defines the tone of the background. Basically the color, so be sure to have the colors defined in Tailwind.
   */
  toneSectionBackground?: string
}

export type ToneLoadingBarProps = {
  /**
   * Defines the background color of the pulsing elements. Basically the color, so be sure to have the colors defined in Tailwind.
   */
  toneLoadingBar?: string
}

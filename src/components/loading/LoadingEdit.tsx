import {
  Section,
  SectionContentTwoColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingInput } from '.'
import React, { ReactNode } from 'react'

export type LoadingEditProps = {
  /**
   * Defines the number of items in the section.
   */
  numberOfItems: number
  /**
   * Defines the title of the section.
   */
  sectionHeader: ReactNode
  /**
   * Defines the color of the background. It uses the tailwind background notation `bg-${backgroundColor}` under the hood.
   */
  colorSectionBackground?: string
  /**
   * Defines the background color of the pulsing elements. It uses the tailwind background notation `bg-${backgroundColor}` under the hood.
   */
  colorLoadingBar?: string
}

const LoadingEdit: React.FC<LoadingEditProps> = ({
  numberOfItems,
  sectionHeader,
  colorSectionBackground,
  colorLoadingBar,
}) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContentTwoColumn backgroundColor={colorSectionBackground}>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingInput backgroundColor={colorLoadingBar} key={index} />
          ))}
      </SectionContentTwoColumn>
    </Section>
  )
}

export { LoadingEdit }

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
}

const LoadingEdit: React.FC<LoadingEditProps> = ({
  numberOfItems,
  sectionHeader,
}) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContentTwoColumn>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingInput key={index} />
          ))}
      </SectionContentTwoColumn>
    </Section>
  )
}

export { LoadingEdit }

import React, { ReactElement, ReactNode } from 'react'
import {
  Section,
  SectionContentTwoColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingInput } from '.'

export type LoadingEditProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
  /**
   * Defines the title of the section.
   **/
  sectionHeader: ReactNode
}

export function LoadingEdit({
  numberOfItems,
  sectionHeader,
}: LoadingEditProps): ReactElement {
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

import {
  Section,
  SectionContentTwoColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingDescriptionItem } from '.'
import { ReactElement, ReactNode } from 'react'

export type LoadingDetailsProps = {
  /**
   * Defines the number of items in the section.
   */
  numberOfItems: number
  /**
   * Defines the title of the section.
   */
  sectionHeader: ReactNode
}

export function LoadingDetails({
  numberOfItems,
  sectionHeader,
}: LoadingDetailsProps): ReactElement {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContentTwoColumn>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingDescriptionItem key={index} />
          ))}
      </SectionContentTwoColumn>
    </Section>
  )
}

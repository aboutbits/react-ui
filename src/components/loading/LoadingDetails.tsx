import { ReactElement, ReactNode } from 'react'
import {
  Section,
  SectionContent,
  SectionContentTwoColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingDescriptionItem } from '.'

export type LoadingDetailsProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
  /**
   * Defines the title of the section.
   **/
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

      <SectionContent>
        <SectionContentTwoColumn>
          {Array(numberOfItems)
            .fill(null)
            .map((_, index) => (
              <LoadingDescriptionItem key={index} />
            ))}
        </SectionContentTwoColumn>
      </SectionContent>
    </Section>
  )
}

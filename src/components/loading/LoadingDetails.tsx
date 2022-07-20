import { ReactElement, ReactNode } from 'react'
import {
  Section,
  SectionContainer,
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

      <SectionContainer>
        <SectionContentTwoColumn>
          {Array(numberOfItems)
            .fill(null)
            .map((_, index) => (
              <LoadingDescriptionItem key={index} />
            ))}
        </SectionContentTwoColumn>
      </SectionContainer>
    </Section>
  )
}

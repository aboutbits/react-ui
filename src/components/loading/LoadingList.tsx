import { ReactElement, ReactNode } from 'react'
import {
  Section,
  SectionHeader,
  SectionContainer,
  SectionContentList,
  SectionTitle,
} from '../section'
import { LoadingListItem } from './LoadingListItem'

export type LoadingListProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
  /**
   * Defines the title of the section.
   **/
  sectionHeader: ReactNode
}

export function LoadingList({
  numberOfItems,
  sectionHeader,
}: LoadingListProps): ReactElement {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContainer>
        <SectionContentList>
          {Array(numberOfItems)
            .fill(null)
            .map((_, index) => (
              <LoadingListItem key={index} />
            ))}
        </SectionContentList>
      </SectionContainer>
    </Section>
  )
}

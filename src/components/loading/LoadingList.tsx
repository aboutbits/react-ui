import {
  Section,
  SectionHeader,
  SectionListItem,
  SectionContentList,
  SectionTitle,
} from '../section'
import { LoadingBar } from '.'
import { ReactNode } from 'react'

export type LoadingListProps = {
  /**
   * Defines the number of items in the section.
   */
  numberOfItems: number
  /**
   * Defines the title of the section.
   */
  sectionHeader: ReactNode
}

const LoadingList: React.FC<LoadingListProps> = ({
  numberOfItems,
  sectionHeader,
}) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContentList>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <SectionListItem key={index}>
              <LoadingBar className="p-4 mr-4 w-full" />
              <LoadingBar className="p-4 w-12" />
            </SectionListItem>
          ))}
      </SectionContentList>
    </Section>
  )
}

export { LoadingList }

import {
  Section,
  SectionContentTwoColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingDescriptionItem } from '.'
import { ReactNode } from 'react'

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

const LoadingDetails: React.FC<LoadingDetailsProps> = ({
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
            <LoadingDescriptionItem key={index} />
          ))}
      </SectionContentTwoColumn>
    </Section>
  )
}

export { LoadingDetails }

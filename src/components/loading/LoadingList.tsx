import { ReactElement, ReactNode } from 'react'
import {
  Section,
  SectionHeader,
  SectionListItem,
  SectionContentList,
  SectionTitle,
} from '../section'
import { useTheme } from '../../framework/theme/ThemeContext'
import { LoadingBar } from '.'

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

export function LoadingList({
  numberOfItems,
  sectionHeader,
}: LoadingListProps): ReactElement {
  const { loading } = useTheme()
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
              <LoadingBar className={loading.listItem.start.base} />
              <LoadingBar className={loading.listItem.end.base} />
            </SectionListItem>
          ))}
      </SectionContentList>
    </Section>
  )
}

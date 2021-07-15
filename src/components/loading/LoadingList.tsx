import {
  Section,
  SectionHeader,
  SectionListItem,
  SectionListContainer,
  SectionTitle,
} from '../section'
import { LoadingBar } from '.'

const LoadingList: React.FC<{
  numberOfItems: number
  sectionHeader: React.ReactNode
}> = ({ numberOfItems, sectionHeader }) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionListContainer>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <SectionListItem key={index}>
              <LoadingBar className="p-4 mr-4 w-full" />
              <LoadingBar className="p-4 w-12" />
            </SectionListItem>
          ))}
      </SectionListContainer>
    </Section>
  )
}

export { LoadingList }

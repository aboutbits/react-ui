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
  toneBackground?: string
  toneElements?: string
}> = ({ numberOfItems, sectionHeader, toneBackground, toneElements }) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionListContainer>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <SectionListItem tone={toneBackground} key={index}>
              <LoadingBar tone={toneElements} className="p-4 mr-4 w-full" />
              <LoadingBar tone={toneElements} className="p-4 w-12" />
            </SectionListItem>
          ))}
      </SectionListContainer>
    </Section>
  )
}

export { LoadingList }

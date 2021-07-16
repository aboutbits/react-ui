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
  tone_background?: string
  tone_elements?: string
}> = ({ numberOfItems, sectionHeader, tone_background, tone_elements }) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionListContainer>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <SectionListItem tone={tone_background} key={index}>
              <LoadingBar tone={tone_elements} className="p-4 mr-4 w-full" />
              <LoadingBar tone={tone_elements} className="p-4 w-12" />
            </SectionListItem>
          ))}
      </SectionListContainer>
    </Section>
  )
}

export { LoadingList }

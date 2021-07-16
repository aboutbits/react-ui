import {
  Section,
  SectionContainerMultiColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingField } from '.'

const LoadingDetails: React.FC<{
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

      <SectionContainerMultiColumn tone={tone_background}>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingField tone={tone_elements} key={index} />
          ))}
      </SectionContainerMultiColumn>
    </Section>
  )
}

export { LoadingDetails }

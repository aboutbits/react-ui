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
}> = ({ numberOfItems, sectionHeader }) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContainerMultiColumn>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingField key={index} />
          ))}
      </SectionContainerMultiColumn>
    </Section>
  )
}

export { LoadingDetails }

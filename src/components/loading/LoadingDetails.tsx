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
  toneSectionBackground?: string
  toneLoadingBar?: string
}> = ({
  numberOfItems,
  sectionHeader,
  toneSectionBackground,
  toneLoadingBar,
}) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContainerMultiColumn tone={toneSectionBackground}>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingField tone={toneLoadingBar} key={index} />
          ))}
      </SectionContainerMultiColumn>
    </Section>
  )
}

export { LoadingDetails }

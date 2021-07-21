import {
  Section,
  SectionHeader,
  SectionListItem,
  SectionContentList,
  SectionTitle,
} from '../section'
import { LoadingBar, LoadingDetailsProps } from '.'

const LoadingList: React.FC<LoadingDetailsProps> = ({
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

      <SectionContentList>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <SectionListItem tone={toneSectionBackground} key={index}>
              <LoadingBar tone={toneLoadingBar} className="p-4 mr-4 w-full" />
              <LoadingBar tone={toneLoadingBar} className="p-4 w-12" />
            </SectionListItem>
          ))}
      </SectionContentList>
    </Section>
  )
}

export { LoadingList }

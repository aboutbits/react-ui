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
  //colorSectionBackground,
  colorLoadingBar,
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
            <SectionListItem
              //tone={colorSectionBackground}
              key={index}
            >
              <LoadingBar
                backgroundColor={colorLoadingBar}
                className="p-4 mr-4 w-full"
              />
              <LoadingBar
                backgroundColor={colorLoadingBar}
                className="p-4 w-12"
              />
            </SectionListItem>
          ))}
      </SectionContentList>
    </Section>
  )
}

export { LoadingList }

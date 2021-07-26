import {
  Section,
  SectionContentTwoColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingField } from '.'
import {
  NumberOfItemsProps,
  SectionHeaderReactProps,
  ToneLoadingBarProps,
  ToneSectionBackgroundProps,
} from './type'

export type LoadingDetailsProps = NumberOfItemsProps &
  SectionHeaderReactProps &
  ToneSectionBackgroundProps &
  ToneLoadingBarProps

const LoadingDetails: React.FC<LoadingDetailsProps> = ({
  numberOfItems,
  sectionHeader,
  colorSectionBackground,
  colorLoadingBar,
}) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContentTwoColumn tone={colorSectionBackground}>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingField backgroundColor={colorLoadingBar} key={index} />
          ))}
      </SectionContentTwoColumn>
    </Section>
  )
}

export { LoadingDetails }

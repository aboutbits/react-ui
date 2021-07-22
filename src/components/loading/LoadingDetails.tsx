import {
  Section,
  SectionContainerMultiColumn,
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
            <LoadingField backgroundColor={toneLoadingBar} key={index} />
          ))}
      </SectionContainerMultiColumn>
    </Section>
  )
}

export { LoadingDetails }

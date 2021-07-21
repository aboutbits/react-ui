import {
  Section,
  SectionContentTwoColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingDetailsProps, LoadingInput } from '.'
import React from 'react'

const LoadingEdit: React.FC<LoadingDetailsProps> = ({
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

      <SectionContentTwoColumn tone={toneSectionBackground}>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingInput tone={toneLoadingBar} key={index} />
          ))}
      </SectionContentTwoColumn>
    </Section>
  )
}

export { LoadingEdit }

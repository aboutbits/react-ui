import {
  Section,
  SectionContainerMultiColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingDetailsProps, LoadingInput } from '.'
import React from 'react'

const LoadingEdit: React.FC<LoadingDetailsProps> = ({
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

      <SectionContainerMultiColumn tone={colorSectionBackground}>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingInput backgroundColor={colorLoadingBar} key={index} />
          ))}
      </SectionContainerMultiColumn>
    </Section>
  )
}

export { LoadingEdit }

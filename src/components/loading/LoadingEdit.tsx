import {
  Section,
  SectionContainerMultiColumn,
  SectionHeader,
  SectionTitle,
} from '../section'
import { LoadingInput } from '.'
import React from 'react'

const LoadingEdit: React.FC<{
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
            <LoadingInput key={index} />
          ))}
      </SectionContainerMultiColumn>
    </Section>
  )
}

// This improves readability in dev tools
LoadingEdit.displayName = 'LoadingEdit'

export { LoadingEdit }

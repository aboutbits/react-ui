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
  toneBackground?: string
  toneElements?: string
}> = ({ numberOfItems, sectionHeader, toneBackground, toneElements }) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{sectionHeader}</SectionTitle>
      </SectionHeader>

      <SectionContainerMultiColumn tone={toneBackground}>
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => (
            <LoadingInput tone={toneElements} key={index} />
          ))}
      </SectionContainerMultiColumn>
    </Section>
  )
}

// This improves readability in dev tools
LoadingEdit.displayName = 'LoadingEdit'

export { LoadingEdit }

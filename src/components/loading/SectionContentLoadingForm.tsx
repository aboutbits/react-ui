import React, { ReactElement } from 'react'
import { SectionContent, SectionContentProps } from '../section'
import { LoadingInput } from '.'

export type SectionContentLoadingFormProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
} & SectionContentProps

export function SectionContentLoadingForm({
  numberOfItems,
  ...props
}: SectionContentLoadingFormProps): ReactElement {
  return (
    <SectionContent {...props}>
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <LoadingInput key={index} />
        ))}
    </SectionContent>
  )
}

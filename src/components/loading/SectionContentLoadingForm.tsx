import React, { ReactElement } from 'react'
import { SectionContent, SectionContentProps } from '../section'
import { LoadingInput } from '.'

export type LoadingEditProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
} & SectionContentProps

export function SectionContentLoadingForm({
  numberOfItems,
  ...props
}: LoadingEditProps): ReactElement {
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

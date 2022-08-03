import { ReactElement } from 'react'
import { SectionContent, SectionContentProps } from '../section'
import { LoadingDescriptionItem } from '.'

export type LoadingDetailsProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
} & SectionContentProps

export function SectionContentLoadingDetails({
  numberOfItems,
  ...props
}: LoadingDetailsProps): ReactElement {
  return (
    <SectionContent {...props}>
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <LoadingDescriptionItem key={index} />
        ))}
    </SectionContent>
  )
}

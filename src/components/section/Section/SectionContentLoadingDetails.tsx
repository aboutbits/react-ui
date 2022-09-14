import { ReactElement } from 'react'
import { SectionLoadingDescriptionItem } from '../SectionItem/SectionLoadingDescriptionItem'
import { SectionContent, SectionContentProps } from './SectionContent'

export type SectionContentLoadingDetailsProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
} & SectionContentProps

export function SectionContentLoadingDetails({
  numberOfItems,
  ...props
}: SectionContentLoadingDetailsProps): ReactElement {
  return (
    <SectionContent {...props}>
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <SectionLoadingDescriptionItem key={index} />
        ))}
    </SectionContent>
  )
}

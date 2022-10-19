import { ReactElement } from 'react'
import { LoadingDescriptionItem } from '../../content'
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
          <LoadingDescriptionItem key={index} />
        ))}
    </SectionContent>
  )
}

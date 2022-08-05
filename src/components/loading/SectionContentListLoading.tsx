import { ReactElement } from 'react'
import { SectionContentList, SectionContentListProps } from '../section'
import { LoadingListItem } from './LoadingListItem'

export type SectionContentListLoadingProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
} & SectionContentListProps

export function SectionContentListLoading({
  numberOfItems,
  ...props
}: SectionContentListLoadingProps): ReactElement {
  return (
    <SectionContentList {...props}>
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <LoadingListItem key={index} />
        ))}
    </SectionContentList>
  )
}

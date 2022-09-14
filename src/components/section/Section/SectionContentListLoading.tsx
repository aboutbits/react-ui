import { ReactElement } from 'react'
import { SectionLoadingListItem } from '../SectionItem/SectionLoadingListItem'
import {
  SectionContentList,
  SectionContentListProps,
} from './SectionContentList'

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
          <SectionLoadingListItem key={index} />
        ))}
    </SectionContentList>
  )
}

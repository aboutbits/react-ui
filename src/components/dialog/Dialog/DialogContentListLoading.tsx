import { ReactElement } from 'react'
import { LoadingListItem } from '../../loading'
import { DialogContentList, DialogContentListProps } from './DialogContentList'

export type DialogContentListLoadingProps = {
  /**
   * Defines the number of items in the dialog content list.
   **/
  numberOfItems: number
} & DialogContentListProps

export function DialogContentListLoading({
  numberOfItems,
  ...props
}: DialogContentListLoadingProps): ReactElement {
  return (
    <DialogContentList {...props}>
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <LoadingListItem key={index} />
        ))}
    </DialogContentList>
  )
}

import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { LoadingBar } from '../../loading'
import { DialogListItem } from './DialogListItem'

export function DialogLoadingListItem(): ReactElement {
  const { dialog } = useTheme()

  return (
    <DialogListItem>
      <LoadingBar className={dialog.loading.listItem.start.base} />
      <LoadingBar className={dialog.loading.listItem.end.base} />
    </DialogListItem>
  )
}

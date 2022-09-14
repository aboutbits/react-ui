import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { LoadingBar } from '../../loading'
import { DialogListItem } from './DialogListItem'

export function DialogLoadingListItem(): ReactElement {
  const { loading } = useTheme()

  return (
    <DialogListItem>
      <LoadingBar className={loading.listItem.start.base} />
      <LoadingBar className={loading.listItem.end.base} />
    </DialogListItem>
  )
}

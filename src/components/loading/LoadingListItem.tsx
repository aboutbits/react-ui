import { ReactElement } from 'react'
import { SectionListItem } from '../section'
import { useTheme } from '../../framework'
import { LoadingBar } from '.'

export function LoadingListItem(): ReactElement {
  const { loading } = useTheme()
  return (
    <SectionListItem>
      <LoadingBar className={loading.listItem.start.base} />
      <LoadingBar className={loading.listItem.end.base} />
    </SectionListItem>
  )
}

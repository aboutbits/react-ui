import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { LoadingBar } from '../../loading'
import { SectionListItem } from './SectionItem'

export function SectionLoadingListItem(): ReactElement {
  const { section } = useTheme()
  return (
    <SectionListItem>
      <LoadingBar className={section.loading.listItem.start.base} />
      <LoadingBar className={section.loading.listItem.end.base} />
    </SectionListItem>
  )
}

import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { LoadingBar } from '../../loading'
import { SectionListItem } from './SectionItem'

export function SectionLoadingListItem({
  className,
}: {
  className?: string
}): ReactElement {
  const { section } = useTheme()
  return (
    <SectionListItem
      className={classNames(section.loading.listItem.base, className)}
    >
      <LoadingBar className={section.loading.listItem.start.base} />
      <LoadingBar className={section.loading.listItem.end.base} />
    </SectionListItem>
  )
}

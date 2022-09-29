import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { LoadingBar } from '../../loading'
import { SectionDescriptionItem } from './SectionDescriptionItem'

export function SectionLoadingDescriptionItem({
  className,
}: {
  className?: string
}): ReactElement {
  const { section } = useTheme()
  return (
    <SectionDescriptionItem
      className={classNames(section.loading.descriptionItem.base, className)}
      title={
        <LoadingBar className={section.loading.descriptionItem.upper.base} />
      }
      content={
        <LoadingBar className={section.loading.descriptionItem.lower.base} />
      }
    />
  )
}

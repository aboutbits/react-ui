import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { LoadingBar } from '../../loading'
import { SectionDescriptionItem } from './SectionDescriptionItem'

export function SectionLoadingDescriptionItem(): ReactElement {
  const { section } = useTheme()
  return (
    <SectionDescriptionItem
      title={
        <LoadingBar className={section.loading.descriptionItem.upper.base} />
      }
      content={
        <LoadingBar className={section.loading.descriptionItem.lower.base} />
      }
    />
  )
}

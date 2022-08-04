import { ReactElement } from 'react'
import { useTheme } from '../../framework'
import { SectionDescriptionItem } from '../section'
import { LoadingBar } from './LoadingBar'

export function LoadingDescriptionItem(): ReactElement {
  const { loading } = useTheme()
  return (
    <SectionDescriptionItem
      title={<LoadingBar className={loading.descriptionItem.upper.base} />}
      content={<LoadingBar className={loading.descriptionItem.lower.base} />}
    />
  )
}

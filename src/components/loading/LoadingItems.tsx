import { ReactElement } from 'react'
import { SectionDescriptionItem } from '../section'
import { useTheme } from '../../designSystem/theme/ThemeContext'
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

export function LoadingInput(): ReactElement {
  const { loading } = useTheme()
  return (
    <div>
      <LoadingBar className={loading.input.upper.base} />
      <LoadingBar className={loading.input.lower.base} />
    </div>
  )
}

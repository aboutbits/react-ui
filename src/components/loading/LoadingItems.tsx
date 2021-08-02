import { ReactElement } from 'react'
import { SectionDescriptionItem } from '../section'
import { useTheme } from '../../theme/ThemeProvider'
import { LoadingBar } from './LoadingBar'

export function LoadingDescriptionItem(): ReactElement {
  const { loading } = useTheme()
  return (
    <SectionDescriptionItem
      title={<LoadingBar className={loading.descriptionItem.lower.base} />}
      content={<LoadingBar className={loading.descriptionItem.upper.base} />}
    />
  )
}

export function LoadingInput(): ReactElement {
  const { loading } = useTheme()
  return (
    <div>
      <LoadingBar className={loading.input.lower.base} />
      <LoadingBar className={loading.input.upper.base} />
    </div>
  )
}

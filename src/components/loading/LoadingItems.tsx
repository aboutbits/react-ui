import { ReactElement } from 'react'
import { SectionDescriptionItem } from '../section'
import { useTheme } from '../../theme/ThemeProvider'
import { LoadingBar } from './LoadingBar'

export function LoadingDescriptionItem(): ReactElement {
  return (
    <SectionDescriptionItem
      title={<LoadingBar className="p-2.5 w-40" />}
      content={<LoadingBar className="p-3 w-full" />}
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

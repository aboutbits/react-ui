import { ReactElement } from 'react'
import { useTheme } from '../../framework'
import { LoadingBar } from './LoadingBar'

export function LoadingInput(): ReactElement {
  const { loading } = useTheme()
  return (
    <div>
      <LoadingBar className={loading.input.upper.base} />
      <LoadingBar className={loading.input.lower.base} />
    </div>
  )
}

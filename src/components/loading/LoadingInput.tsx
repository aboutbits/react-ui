import { ReactElement } from 'react'
import { useTheme } from '../../framework'
import { LoadingBar } from './LoadingBar'

export function LoadingInput({
  className,
}: {
  className?: string
}): ReactElement {
  const { loading } = useTheme()
  return (
    <div className={(loading.input.base, className)}>
      <LoadingBar className={loading.input.upper.base} />
      <LoadingBar className={loading.input.lower.base} />
    </div>
  )
}

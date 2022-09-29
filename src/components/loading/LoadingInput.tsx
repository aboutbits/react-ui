import classNames from 'classnames'
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
    <div className={classNames(loading.input.base, className)}>
      <LoadingBar className={loading.input.upper.base} />
      <LoadingBar className={loading.input.lower.base} />
    </div>
  )
}

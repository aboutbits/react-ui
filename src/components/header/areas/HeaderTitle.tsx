import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type HeaderTitleProps = ClassNameProps & {
  children?: ReactNode
  noTruncate?: boolean
}

export function HeaderTitle({
  className,
  children,
  noTruncate = false,
}: HeaderTitleProps): ReactElement {
  const { header } = useTheme()

  return (
    <h1
      className={classNames(
        className,
        header.title.base,
        !noTruncate && header.title.truncate
      )}
    >
      {children}
    </h1>
  )
}

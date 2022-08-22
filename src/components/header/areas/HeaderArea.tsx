import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps & { children?: ReactNode }

export function HeaderArea({ className, children }: Props): ReactElement {
  const { header } = useTheme()

  return (
    <div className={classNames(header.area.base, className)}>{children}</div>
  )
}

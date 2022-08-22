import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps & { children?: ReactNode }

export function HeaderTitle({ className, children }: Props): ReactElement {
  const { header } = useTheme()

  return (
    <h1 className={classNames(className, header.title.base)}>{children}</h1>
  )
}
